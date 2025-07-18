import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/shamp-logo.png"}
        alt="Shamp Logo"
        height={27.999998092651367}
        width={102.68000030517578}
      />
    </Link>
  )
}
