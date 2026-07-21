import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { personal } from '@/lib/data'

export const metadata: Metadata = {
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s | ${personal.name}`,
  },
  description: personal.bio,
  keywords: [
    'MLOps Engineer',
    'Platform Engineer',
    'LLMOps',
    'AI Platform',
    'Google Cloud',
    'Production ML',
    'Kubernetes',
    'Vertex AI',
    'Machine Learning',
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: `${personal.name} — ${personal.title}`,
    description: personal.bio,
    siteName: personal.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personal.name} — ${personal.title}`,
    description: personal.bio,
  },
  robots: {
    index: false,
    follow: false,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
