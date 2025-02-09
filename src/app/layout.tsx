import "./globals.css";
import emailjs from "@emailjs/browser";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-primary-dark font-railway text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
