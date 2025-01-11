import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Search App',
  description: 'Search for animals',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </>
      </body>
    </html>
  );
}
