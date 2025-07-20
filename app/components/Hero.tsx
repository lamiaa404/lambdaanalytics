'use client';

import { useState } from 'react';
import Link from "next/link";
import PasswordModal from './PasswordModal';

export default function Hero() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Left side content */}
          <div className="w-full lg:w-2/5">
            <div className="flex flex-col items-start mb-6">
              <span className="text-4xl font-bold text-emerald-500 dark:text-emerald-400 mb-2">λ</span>
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 rounded-full border border-emerald-200 dark:border-emerald-800">
                Lambda: moderne Datenlösungen
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-600 dark:from-white dark:via-slate-200 dark:to-emerald-400">
              Datenlösungen für die <span className="text-emerald-600 dark:text-emerald-400">Gesundheitsforschung</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
              Maßgeschneiderte Datenlösungen für Krebsregister und Gesundheitsinstitutionen
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Wir entwickeln maßgeschneiderte Datenlösungen für Krebsregister und Gesundheitsinstitutionen.
              Modern, flexibel und kosteneffizient – ohne Kompromisse bei Qualität und Datensicherheit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#contact" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-emerald-500/20"
              >
                Kontakt aufnehmen
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPasswordModal(true);
                }}
                className="border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium py-3 px-6 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors inline-block"
              >
                Meine Arbeit
              </button>
              <PasswordModal
                isOpen={showPasswordModal}
                onClose={() => setShowPasswordModal(false)}
                redirectUrl="https://lambda-cancer-registry.vercel.app"
              />
            </div>
          </div>
          
          {/* Video container */}
          <div className="w-full mt-12 lg:mt-0">
            <div className="relative w-full lg:w-[32vw] max-w-3xl ml-auto mr-0 lg:mr-0 lg:translate-x-8 rounded-xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 dark:border-emerald-400/30">
              <div className="relative">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full max-h-[480px] object-cover rounded-lg"
                style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
                onError={(e) => console.error('Video error:', e)}
                onCanPlay={() => console.log('Video can play')}
                onPlay={() => console.log('Video started playing')}
              >
                <source 
  src="/video/demo.mp4"
  type="video/mp4"
/>
                Your browser does not support the video tag.
              </video>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}