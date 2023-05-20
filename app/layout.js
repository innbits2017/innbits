"use client"

import "@styles/globals.css"
import "@styles/boxicons.min.css"
import "@styles/swiper-bundle-min.css"
import "@styles/theme.min.css"


import Head from "next/head"
import Script from 'next/script';
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { usePathname } from 'next/navigation';



export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head>
          <meta charSet='utf-8' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon.png' />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="icon" href="/favicon.png" type="image/x-icon" />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/favicon.png' />
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        </Head>

      <body>
      {pathname === '/' ? null : <Navbar /> } 
      {/* <Navbar />  */}
       <main>
       {children}
       </main>
        <Footer />
        
          {/* Vendor Scripts */}
          <Script src='/vendor/bootstrap/js/bootstrap.bundle.min.js' />
          <Script src='/vendor/smooth-scroll/smooth-scroll.polyfills.min.js' />
          <Script src='/vendor/swiper/swiper-bundle-min.js' />
          <Script src='/vendor/jarallax/jarallax-elemet-min.js' />
          <Script src='/vendor/parallax/parallax.min.js' />

          {/* Main Theme Script */}
          <Script src='/assets/js/theme.js' />

        </body>
    </html>
  )
}
