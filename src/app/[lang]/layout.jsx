import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import End from "./components/End";
import Script from "next/script";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Megatron-soft",
  description: "Megatron software",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }]
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <Script id="gtm" strategy="afterInteractive">
        {`
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PB3CPDK8');
      `}
      </Script>

      <body className={`${inter.className} bg-[#0F1428]`}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PB3CPDK8"
height="0" width="0" style="display:none;visibility:hidden">`,
          }}
        />

        <Suspense>
          <Header lang={params.lang} />
        </Suspense>
          {children}
        <End lang={params.lang} />
      </body>
    </html>
  );
}
