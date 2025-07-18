import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Shamp",
  description: "Shamp",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
