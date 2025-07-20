'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectUrl: string;
}

export default function PasswordModal({ isOpen, onClose, redirectUrl }: PasswordModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted password:', password);
    console.log('Expected password:', 'your-password');
    console.log('Redirect URL:', redirectUrl);
    
    // Trim whitespace from the input
    const trimmedPassword = password.trim();
    
    // Check if the password matches (case-sensitive)
    if (trimmedPassword === 'your-password') {
      console.log('Password correct, redirecting...');
      window.location.href = redirectUrl; // Using window.location to do a full page redirect
    } else {
      console.log('Incorrect password');
      setError('Falsches Passwort. Bitte versuchen Sie es erneut.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Zugriff auf Referenzen</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Bitte geben Sie das Passwort ein, um auf die Referenzen zuzugreifen.
        </p>
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
            Kein Passwort? Kontaktieren Sie uns gerne für weitere Informationen zu unseren Referenzen.
          </p>
          <a 
            href="mailto:lambdaanalytics0@gmail.com" 
            className="inline-flex items-center text-sm font-medium text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            lambdaanalytics0@gmail.com
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
              placeholder="Passwort"
              required
            />
            {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Bestätigen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
