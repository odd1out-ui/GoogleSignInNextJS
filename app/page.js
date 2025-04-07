import Head from 'next/head';
import GoogleSignIn from '../app/src/components/GoogleSignIn';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js with Tailwind and Google Sign-In</title>
        <meta name="description" content="Next.js with Tailwind and Google Sign-In" />
      </Head>
      
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Our App</h1>
          <p className="text-gray-600 mb-6">Please sign in to continue</p>
          <GoogleSignIn />
        </div>
        
        {/* Add Toaster component here */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
            error: {
              duration: 4000,
            },
          }}
        />
      </main>
    </>
  );
}