/**
 * O TÍTULO DA ABA DAS TELAS LOGADAS (`/app` e `/admin`), no idioma de quem as abre.
 *
 * Cada página declarava `export const metadata = { title: "Contatos" }`: um objeto fixo, montado antes de qualquer
 * requisição, que não sabe o idioma de quem abre. O corpo da tela saía em espanhol e a aba seguia em português — a
 * primeira coisa que a pessoa lê e a que fica na barra de favoritos. É o mesmo defeito que `tituloDaTelaPublica`
 * (`titulo-da-tela-publica.ts`) fechou nas telas de acesso, agora para as telas que exigem sessão.
 *
 * O idioma é o mesmo do corpo da página: `user.idioma`, que `loadAuthUser` resolve (preferência pessoal, depois a da
 * organização ativa). `loadAuthUser` é `cache()` por requisição, então chamá-lo aqui não custa uma ida a mais ao banco:
 * a página e o layout já o chamam. Sem sessão (a página vai redirecionar para o login), cai no idioma do visitante.
 *
 * O título chega como função que recebe o tradutor — `tituloDaTelaDoApp((t) => t("Contatos"))` —, e não como texto:
 * assim o literal mora na página, onde a cerca `i18n-espanhol-cobre-a-tela` o vê. Um `traduzir(titulo)` aqui dentro
 * seria `t()` sobre parâmetro livre, que ela reprova.
 */
import type { Metadata } from "next";

import { loadAuthUser } from "@/lib/auth/server";
import { traduzir } from "@/lib/i18n/dicionario";
import { idiomaDoVisitante } from "@/lib/i18n/idiomaAnonimo";

export async function tituloDaTelaDoApp(titulo: (t: (texto: string) => string) => string): Promise<Metadata> {
  const user = await loadAuthUser();
  const idioma = user?.idioma ?? (await idiomaDoVisitante(null));
  return { title: titulo((texto) => traduzir(texto, idioma)) };
}
