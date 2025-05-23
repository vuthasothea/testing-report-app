"use client"

import { useParams, usePathname, useSearchParams } from "next/navigation"

export default function Page() {

  const param = useParams<{account: string}>();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <>
      <h1>Over View: {param.account}</h1>
      <h2>Pathname: {pathname}</h2>
      <h2>Search Params: {searchParams.get("id")}</h2>
    </>
  )
}