'use client';

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useCallback } from 'react';
import toast from 'react-hot-toast';

const GoogleSignIn = () => {
  const onSuccess = useCallback((credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    toast.success('Google login successful!');
    // Here you would verify the credential with your backend
  }, []);

  const onError = useCallback(() => {
    console.log('Login Failed');
    toast.error('Google login failed');
  }, []);

  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-gray-700 mb-2">Sign in with Google</p>
      <GoogleOAuthProvider clientId="372693844070-4592hd5gq1upl3jp0t5lkklus55s660d.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          useOneTap
          theme="filled_blue"
          size="medium"
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleSignIn;