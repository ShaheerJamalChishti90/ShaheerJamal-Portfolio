// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Shaheer Jamal Chishti | Cloud Data Engineer & Software Developer',
  description: 'Portfolio of Muhammad Shaheer Jamal Chishti. Cloud Data Engineer, Software Developer, and Tech Consultant specializing in AWS, Snowflake, Python, Java, and Next.js.',
  keywords: [
    'Shaheer Jamal', 
    'Shaheer Jamal Chishti', 
    'shaheer jamal chishti', 
    'Shaheer Jamal Vercel', 
    'ShaheerJamal Vercel App', 
    'Muhammad Shaheer Jamal Chishti', 
    'Muhammad Shaheer Jamal', 
    'muhammad shaheer jamal', 
    'Cloud Data Engineer', 
    'Software Developer',
    'Data Engineering',
    'React Developer',
    'Next.js',
    'Python',
    'Java',
    'jamal chishti',
    'chishti',
    'Pakistan'
  ],
  authors: [{ name: 'Muhammad Shaheer Jamal Chishti' }],
  creator: 'Muhammad Shaheer Jamal Chishti',
  openGraph: {
    title: 'Shaheer Jamal | Cloud Data Engineer & Developer',
    description: 'Explore my projects in Cloud Data Engineering, Data Analysis, and Software Development. Let\'s build scalable solutions.',
    url: 'https://shaheerjamal.vercel.app',
    siteName: 'Shaheer Jamal Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* --- THIS LINK IS REQUIRED FOR ICONS TO SHOW UP --- */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <meta name="google-site-verification" content="wot6OUU9cVex1co7xBPahWMPvSwWljLZrM-id1ZCgus" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}