import Script from "next/script";
import "./globals.css";
import emailjs from "@emailjs/browser";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11312103664"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          
          function gtag(){
            dataLayer.push(arguments);
          }

          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', 'AW-11312103664');
        `}
        </Script>
      </head>
      <body className={` bg-primary-dark font-railway text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
