import { DashboardClient } from "./_client";
import { tituloDaTelaDoApp } from "@/lib/i18n/titulo-da-tela-do-app";

export const generateMetadata = () => tituloDaTelaDoApp((t) => t("Dashboard — Admin Plataforma"));

export default function AdminDashboardPage() {
  return <DashboardClient />;
}
