import './globals.css';

export const metadata = {
  title: 'Next.js with Tailwind and Google Auth',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}