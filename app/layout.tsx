import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Footer from "./components/home/Footer";
import SmoothScroll from "./components/util/SmoothScroll";

const customMonoFont = localFont({
  src: [
    {
      path: '../public/fonts/PP_Fraktion_Mono/PPFraktionMono-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/PP_Fraktion_Mono/PPFraktionMono-RegularItalic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/PP_Fraktion_Mono/PPFraktionMono-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/PP_Fraktion_Mono/PPFraktionMono-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
  ]
})

export const metadata: Metadata = {
  title: "Team TBD",
  description: "Team page for Team 203. IDP Spring '26.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${customMonoFont.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
