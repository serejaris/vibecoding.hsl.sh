// app/layout.js
import Script from 'next/script';
import "./globals.css";
import { PreloaderProvider, Preloader } from './components/preloader';
import { FontLoader } from './components/preloader/FontLoader.jsx';
import { PreloaderErrorBoundary } from './components/preloader/ErrorBoundary.jsx';
import { AccessibilityOptimizer } from './components/preloader/AccessibilityOptimizer.jsx';

// Data for the JSON-LD script
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Вайб-кодинг с AI",
  "description": "Практический интенсив по созданию сайтов и Telegram-ботов с помощью AI",
  "provider": { "@type": "Person", "name": "Сережа Рис" },
  "instructor": { "@type": "Person", "name": "Сережа Рис" },
  "courseMode": "online",
  "educationalLevel": "Beginner"
};

export const metadata = {
  title: "Вайб-кодинг с AI: Создавай сайты и Telegram-ботов в чате с ИИ | Сережа Рис",
  description: "Научись создавать сайты и Telegram-ботов через чат с AI. Практический интенсив от Сережи Риса для начинающих. Получи бесплатный гайд и начни кодить уже сегодня!",
  keywords: ["AI", "вайб-кодинг", "создание сайтов", "telegram бот", "ChatGPT", "Claude", "веб-разработка", "без кода", "Сережа Рис", "интенсив", "обучение ИИ"],
  author: [{ name: "Сережа Рис" }],
  robots: "index, follow",
  themeColor: "#0071e3",
  appleWebApp: { capable: "yes", statusBarStyle: "default", title: "Вайб-кодинг с AI" },
  alternates: { canonical: "https://school.hsl.sh/" },
  openGraph: {
    type: "website",
    url: "https://school.hsl.sh/",
    title: "Вайб-кодинг с AI: Создавай сайты и Telegram-ботов в чате с ИИ",
    description: "Научись создавать сайты и Telegram-ботов через чат с AI. Практический интенсив от Сережи Риса для начинающих.",
    images: [{ url: "https://school.hsl.sh/og-image.jpg", width: 1200, height: 630 }],
    siteName: "Вайб-кодинг с AI",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://school.hsl.sh/",
    title: "Вайб-кодинг с AI: Создавай сайты и Telegram-ботов в чате с ИИ",
    description: "Научись создавать сайты и Telegram-ботов через чат с AI. Практический интенсив от Сережи Риса для начинающих.",
    images: ["https://school.hsl.sh/og-image.jpg"],
    creator: "@r1iiis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Font preloading for better performance */}
        <link
          rel="preload"
          href="data:font/woff2;base64,d09GMgABAAAAAAYAAA=="
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Optimize font loading with font-display: swap */
            @font-face {
              font-family: -apple-system;
              font-display: swap;
            }
            
            /* Ensure smooth font transitions */
            * {
              font-synthesis: none;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            
            /* Hide content until fonts are loaded to prevent FOUT */
            body:not(.fonts-loaded) {
              visibility: hidden;
            }
            
            body.fonts-loaded {
              visibility: visible;
            }
          `
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-apple text-apple-black bg-white overflow-x-hidden">
        <PreloaderErrorBoundary>
          <PreloaderProvider>
            <AccessibilityOptimizer />
            <FontLoader />
            <Preloader />
            {children}
            {process.env.NODE_ENV === 'development' && (
              <>
                <script dangerouslySetInnerHTML={{
                  __html: `
                    // Add debug info to console
                    console.log('🎨 Preloader initialized');
                    
                    // Test font loading
                    if (document.fonts) {
                      document.fonts.ready.then(() => {
                        console.log('✅ Fonts ready');
                      });
                    }
                  `
                }} />
              </>
            )}
          </PreloaderProvider>
        </PreloaderErrorBoundary>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FMC7N45N42" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FMC7N45N42');
          `}
        </Script>
      </body>
    </html>
  );
}