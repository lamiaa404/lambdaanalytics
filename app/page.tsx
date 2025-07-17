import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lambda | Moderne Datenlösungen für die Gesundheitsforschung",
  description: "Maßgeschneiderte Datenlösungen und interaktive Berichte für Krebsregister und Gesundheitsinstitutionen",
  keywords: ["Gesundheitsdaten", "Krebsregister", "Datenanalyse", "Dashboard", "Gesundheitsforschung"],
};

const Hero = () => (
  <section className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-block mb-6 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 rounded-full border border-emerald-200 dark:border-emerald-800">
            Lambda: moderne Datenlösungen
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
            <Link 
              href="#work" 
              className="border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium py-3 px-6 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Meine Arbeit
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/10 to-blue-500/10 dark:from-emerald-500/5 dark:to-blue-500/5 blur-3xl animate-pulse-slow"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-emerald-500/30 dark:border-emerald-400/30 flex items-center justify-center bg-white/10 dark:bg-black/10 backdrop-blur-sm shadow-2xl">
              <span className="text-9xl font-bold text-emerald-600 dark:text-emerald-400">λ</span>
            </div>
            <div className="absolute -inset-4 rounded-full border-2 border-emerald-500/20 dark:border-emerald-400/20 animate-spin-slow" style={{ animationDuration: '30s' }}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section bg-white/50 dark:bg-slate-900/50">
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </div>
    <div className="container mx-auto px-4">
      <h2 className="section-title">Über Uns</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          Wir sind ein erfahrenes Team von Datenexperten und Entwicklern, das sich auf die Erstellung moderner, 
          benutzerfreundlicher Datenlösungen für den Gesundheitsbereich spezialisiert hat. Unser Fokus liegt auf der 
          Entwicklung kosteneffizienter Alternativen zu teuren Standardlösungen.
        </p>
        <p className="text-lg mb-8">
          Mit unserem erfolgreichen Projekt für das Landeskrebsregister haben wir bewiesen, dass 
          maßgeschneiderte Lösungen nicht nur günstiger, sondern auch besser an die spezifischen Anforderungen 
          unserer Kunden angepasst sein können.
        </p>
        <h3 className="text-xl font-semibold mb-4 text-center">Unsere Kernkompetenzen</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Datenvisualisierung',
            'Interaktive Dashboards',
            'Datenanalyse',
            'Webentwicklung',
            'Datenbankdesign',
            'Datenintegration'
          ].map((skill) => (
            <div key={skill} className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Work = () => (
  <section id="work" className="section bg-slate-50/50 dark:bg-slate-900/50">
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </div>
    <div className="container mx-auto px-4">
      <h2 className="section-title">Referenzprojekte</h2>
      <p className="text-lg text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
        Unsere Lösungen bieten eine kosteneffiziente Alternative zu teuren Standardprodukten,
        ohne dabei Einbußen bei Qualität oder Funktionalität hinnehmen zu müssen.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Landeskrebsregister Dashboard",
            description: "Maßgeschneidertes Dashboard für die Analyse von Krebsregisterdaten mit interaktiven Visualisierungen und Berichtsfunktionen.",
            features: ["Echtzeit-Datenanalyse", "Individuelle Berichtsvorlagen", "Benutzerfreundliche Oberfläche"]
          },
          {
            title: "Epidemiologische Auswertungen",
            description: "Lösung für die Auswertung und Visualisierung epidemiologischer Daten mit Fokus auf Benutzerfreundlichkeit.",
            features: ["Datenexport in verschiedene Formate", "Interaktive Diagramme", "Zugriffsverwaltung"]
          },
          {
            title: "Datenintegration",
            description: "Zentrale Plattform zur Integration verschiedener Datenquellen für umfassende Analysen.",
            features: ["Automatisierte Datenaufbereitung", "Sichere Datenübertragung", "Skalierbare Architektur"]
          }
        ].map((project, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
            <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center p-6">
              <span className="text-2xl text-white font-semibold text-center">{project.title}</span>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="mt-4 space-y-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section bg-white/50 dark:bg-slate-900/50">
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </div>
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-title">Kostenlose Erstberatung</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Interessieren Sie sich für eine kosteneffiziente Alternative zu teuren Standardlösungen?
          Vereinbaren Sie noch heute ein unverbindliches Beratungsgespräch.
        </p>
        <a 
          href="mailto:lambdaanalytics0@gmail.com" 
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-emerald-500/20"
        >
          Jetzt Beratungstermin vereinbaren
        </a>
        <div className="mt-12 flex justify-center gap-6">
          {['github', 'twitter', 'linkedin'].map((social) => (
            <a 
              key={social} 
              href={`https://${social}.com/ihrbenutzername`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors hover:scale-110"
              aria-label={social}
            >
              <span className="sr-only">{social}</span>
              <span className="text-2xl">
                {social === 'github' ? '🐙' : social === 'twitter' ? '🐦' : '💼'}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-900">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#0ea5e9,transparent)]"></div>
      </div>
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
