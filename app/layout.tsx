import type { Metadata } from 'next';
import Container from '@/components/global/Container';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import './globals.css';

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
      <body>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
