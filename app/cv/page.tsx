import { Metadata } from 'next';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaFilePdf } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'CV | Lamiaa Hassan - Data Scientist & Epidemiologin',
  description: 'Lamiaa Hassans beruflicher Werdegang, Fähigkeiten und Veröffentlichungen',
};

const CV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Lamiaa Hassan</h1>
          <h2 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
            Data Scientist & Epidemiologin
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-slate-600 dark:text-slate-300">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-emerald-500" />
              <span>Leipzig, Deutschland</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-emerald-500" />
              <a href="mailto:lambdaanalytics0@gmail.com" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                lambdaanalytics0@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaGithub className="mr-2 text-emerald-500" />
              <a href="https://github.com/lamiaa404" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                lamiaa404
              </a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <span className="w-8 h-1 bg-emerald-500 mr-3"></span>
                Über mich
              </h2>
              <p className="text-slate-700 dark:text-slate-300">
                Interdisziplinäre Datenexpertin mit fundierter Ausbildung in Epidemiologie und Informatik. Spezialisiert auf die Analyse von Gesundheitsdaten, Entwicklung von Datenpipelines und angewandte Statistik mit Fokus auf kausale Inferenz und Versorgungsforschung.
              </p>
            </section>

            {/* Experience */}
            <section className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                <FaBriefcase className="text-emerald-500 mr-3" />
                Berufserfahrung
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-2 border-emerald-500 pl-4 relative pb-6">
                  <div className="absolute w-3 h-3 rounded-full bg-emerald-500 -left-[7px] top-1"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Senior Data Scientist</h3>
                    <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Dez 2024 – heute</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">Kassenärztliche Bundesvereinigung (KBV), Berlin (remote)</p>
                  <ul className="mt-2 space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside">
                    <li>Analyse und Aufbereitung von Abrechnungsdaten (~77 Mio gesetzlich Versicherte) mit Python und SQL</li>
                    <li>Entwicklung reproduzierbarer SQL-Datenpipelines (Oracle)</li>
                    <li>Zusammenarbeit mit Fachexpert:innen und medizinischen Referaten</li>
                  </ul>
                </div>

                <div className="border-l-2 border-emerald-500 pl-4 relative pb-6">
                  <div className="absolute w-3 h-3 rounded-full bg-emerald-500 -left-[7px] top-1"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Wissenschaftliche Mitarbeiterin / Epidemiologin</h3>
                    <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Aug 2017 – Sep 2021</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">Institut für Medizinische Epidemiologie, Martin-Luther-Universität Halle</p>
                  <ul className="mt-2 space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside">
                    <li>Analyse von Gesundheitsdaten zu kardiovaskulären Erkrankungen und Krebs</li>
                    <li>Projektleitung des dritten Follow-ups der CARLA-Kohorte</li>
                    <li>Durchführung von Überlebensanalysen und kausaler Inferenz</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                <FaGraduationCap className="text-emerald-500 mr-3" />
                Ausbildung
              </h2>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">Bachelor of Science in Informatik</h3>
                    <p className="text-slate-600 dark:text-slate-400">Universität Leipzig</p>
                  </div>
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Okt 2021 – Nov 2024</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">Master of Science in Epidemiologie</h3>
                    <p className="text-slate-600 dark:text-slate-400">Ludwig-Maximilians-Universität München</p>
                  </div>
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Okt 2014 – Apr 2017</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <section className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Fähigkeiten</h2>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Core Competencies</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-lg font-medium rounded-lg">
                      Web Development
                    </span>
                    <span className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-lg font-medium rounded-lg">
                      Data Visualization
                    </span>
                    <span className="px-6 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-lg font-medium rounded-lg">
                      Data Analytics
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Publications */}
            <section className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Ausgewählte Publikationen</h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Blood-brain barrier crossing renin-angiotensin drugs and cognition in the elderly: a meta-analysis",
                    journal: "Hypertension 78(3), 629-643 (2021)",
                    doi: "10.1161/HYPERTENSIONAHA.121.17049"
                  },
                  {
                    title: "Relationship between caries experience and demarcated hypomineralised lesions in the permanent dentition of 15-year-olds",
                    journal: "Clinical Oral Investigations 22(5), 2013-2019 (2018)",
                    doi: "10.1007/s00784-017-2291-z"
                  },
                  {
                    title: "Is there an association between asthma and dental caries and molar incisor hypomineralisation?",
                    journal: "Caries Research 54(1), 87-95 (2020)",
                    doi: "10.1159/000504168"
                  },
                  {
                    title: "Associations of occupational and leisure-time physical activity with all-cause mortality: an individual participant data meta-analysis",
                    journal: "British Journal of Sports Medicine 58(24), 1527-1538 (2024)",
                    doi: "10.1136/bjsports-2023-107174"
                  },
                  {
                    title: "Socioeconomic disparities in head and neck cancer survival in Germany: a causal mediation analysis",
                    journal: "Journal of Cancer Research and Clinical Oncology 147(5), 1325-1334 (2021)",
                    doi: "10.1007/s00432-021-03531-8"
                  },
                  {
                    title: "Cardiovascular risk factors, living and ageing in Halle: the CARLA study",
                    journal: "European Journal of Epidemiology 37(1), 103-116 (2022)",
                    doi: "10.1007/s10654-021-00833-8"
                  },
                  {
                    title: "Correlation of Increased Soluble Tumor Necrosis Factor Receptor 1 with Mortality in Non-Small-Cell Lung Cancer Patients",
                    journal: "Cancers 16(3), 525 (2024)",
                    doi: "10.3390/cancers16030525"
                  },
                  {
                    title: "Stereotactic Ablative Radiotherapy versus Video-Assisted Lobectomy for Operable Stage I Non-small-cell Lung Cancer",
                    journal: "Research Square (2024)",
                    doi: "10.21203/rs.3.rs-4268816/v1"
                  },
                  {
                    title: "Physical Activity Trajectories at Older Age and All-Cause Mortality",
                    journal: "PLoS One 18(1), e0280878 (2023)",
                    doi: "10.1371/journal.pone.0280878"
                  }
                ].map((pub, index) => (
                  <div key={index} className="border-l-2 border-emerald-500 pl-3 py-1">
                    <h3 className="font-medium text-slate-800 dark:text-white">{pub.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{pub.journal}</p>
                    {pub.doi && (
                      <a 
                        href={`https://doi.org/${pub.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        DOI: {pub.doi}
                      </a>
                    )}
                  </div>
                ))}
                <div className="pt-2">
                  <a 
                    href="#" 
                    className="text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:underline flex items-center"
                  >
                    <FaFilePdf className="mr-1" />
                    Vollständige Publikationsliste herunterladen
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Lamiaa Hassan. Alle Rechte vorbehalten.</p>
          <div className="mt-2">
            <Link href="/" className="text-emerald-600 dark:text-emerald-400 hover:underline">
              Zurück zur Startseite
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CV;
