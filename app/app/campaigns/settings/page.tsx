
import { ConfiguracaoDeCampanhas } from "./_client";
import { tituloDaTelaDoApp } from "@/lib/i18n/titulo-da-tela-do-app";

export const dynamic = "force-dynamic";
export const generateMetadata = () => tituloDaTelaDoApp((t) => t("Configuração de campanhas"));

export default function ConfiguracaoDeCampanhasPage() {
  return <ConfiguracaoDeCampanhas />;
}
