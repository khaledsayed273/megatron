import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import End from "./components/End";

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
      <body className={`${inter.className} bg-[#0F1428]`}>
        <Header lang={params.lang} />
        {children}
        <End lang={params.lang} />
      </body>
    </html>
  );
}
