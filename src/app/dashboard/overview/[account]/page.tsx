"use client"

import { useParams } from "next/navigation"

export default function Page() {

  const param = useParams<{account: string}>();

  return (
    <h1>Over View: {param.account}</h1>
  )
}