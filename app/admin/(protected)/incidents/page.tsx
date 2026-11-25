import { IncidentsClient } from "./_client";
import { tituloDaTelaDoApp } from "@/lib/i18n/titulo-da-tela-do-app";

export const generateMetadata = () => tituloDaTelaDoApp((t) => t("Incidentes — Admin Plataforma"));

export default function AdminIncidentsPage() {
  return <IncidentsClient />;
}
