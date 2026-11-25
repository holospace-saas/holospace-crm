import { UsageClient } from "./_client";
import { tituloDaTelaDoApp } from "@/lib/i18n/titulo-da-tela-do-app";

export const generateMetadata = () => tituloDaTelaDoApp((t) => t("Uso & Custo — Admin Plataforma"));

export default function AdminUsagePage() {
  return <UsageClient />;
}
