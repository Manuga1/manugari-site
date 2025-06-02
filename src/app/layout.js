import './globals.css';
import Layout from '../components/Layout';

export const metadata = {
  title: 'Manu | Portfolio',
  description: 'Minimalist portfolio built with Next.js and Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
