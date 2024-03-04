import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import End from "./components/End";
import { AOSInit } from "../shared/AosInit";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Megatron",
  description: "Megatron software",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }]
}

export default function RootLayout({ children, params }) {

  return (
    <html lang={params.lang}>
      <AOSInit />
      <body className={inter.className}>
        <Header lang={params.lang} />
        {children}
        <End lang={params.lang} />
      </body>
    </html>
  );
}
