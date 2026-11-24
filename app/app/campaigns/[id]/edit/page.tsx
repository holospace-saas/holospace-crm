
import { EditarCampanha } from "./_client";
import { tituloDaTelaDoApp } from "@/lib/i18n/titulo-da-tela-do-app";

export const dynamic = "force-dynamic";
export const generateMetadata = () => tituloDaTelaDoApp((t) => t("Editar campanha"));

export default async function EditarCampanhaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <EditarCampanha id={id} />;
}
