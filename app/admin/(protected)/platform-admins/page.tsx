import { PlatformAdminsClient } from "./_client";
import { tituloDaTelaDoApp } from "@/lib/i18n/titulo-da-tela-do-app";

export const generateMetadata = () => tituloDaTelaDoApp((t) => t("Platform Admins — Admin Plataforma"));

export default function AdminPlatformAdminsPage() {
  return <PlatformAdminsClient />;
}
