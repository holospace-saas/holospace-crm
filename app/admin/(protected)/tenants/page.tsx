import { TenantsClient } from "./_client";
import { tituloDaTelaDoApp } from "@/lib/i18n/titulo-da-tela-do-app";

export const generateMetadata = () => tituloDaTelaDoApp((t) => t("Tenants — Admin Plataforma"));

export default function AdminTenantsPage() {
  return <TenantsClient />;
}
