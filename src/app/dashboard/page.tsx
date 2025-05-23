import { redirect } from "next/navigation";

export default function DashboardPage() {

  const isLoggedIn = true;

  if(isLoggedIn) {
    redirect("/dashboard/overview");
  } else {
    redirect("/login");
  }

}