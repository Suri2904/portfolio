import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Suryansh Chandel',
  description: 'I notice broken systems and build things to fix them.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-24 flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}