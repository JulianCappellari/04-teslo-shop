import { auth } from "@/auth.config";
import { Titulo } from "@/components";
import { redirect } from "next/navigation";

export default async function PerfilPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
    // redirect('/auth/login?returnTo=perfil')
  }

  return (
    <div>
      <Titulo titulo="Perfil" />
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  );
}
