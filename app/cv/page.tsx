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
                  // 2025
                  {
                    title: "Acute respiratory tract infections during the first 6 years of life–results from the German birth cohort study LoewenKIDS",
                    journal: "International Journal of Infectious Diseases 153, 107802 (2025)",
                    doi: "10.1016/j.ijid.2024.107802",
                    authors: "Klee B, Diexer S, Langer S, Gottschick C, Hartmann C, Glaser N, Horn J, Hassan L, et al.",
                    impactFactor: 8.4
                  },
                  
                  // 2024
                  {
                    title: "Stereotactic Ablative Radiotherapy versus Video-Assisted Lobectomy for Operable Stage I Non-small-cell Lung Cancer: Study Protocol for an Emulated Target Trial",
                    journal: "BMC Cancer 24, 123 (2024)",
                    doi: "10.1186/s12885-024-11884-9",
                    authors: "Bedir A, Hassan L, Wittenberg I, Müller JA, Oesterling F, Stang A, et al.",
                    impactFactor: 3.8
                  },
                  {
                    title: "Correlation of Increased Soluble Tumor Necrosis Factor Receptor 1 with Mortality and Dependence on Treatment in Non-Small-Cell Lung Cancer Patients: A Longitudinal Cohort Study",
                    journal: "Cancers 16(3), 525 (2024)",
                    doi: "10.3390/cancers16030525",
                    authors: "Hassan L, Bedir A, Kraus FB, Ostheimer C, Vordermark D, Mikolajczyk R, et al.",
                    impactFactor: 5.2
                  },
                  {
                    title: "Associations of occupational and leisure-time physical activity with all-cause mortality: an individual participant data meta-analysis",
                    journal: "British Journal of Sports Medicine 58(24), 1527-1538 (2024)",
                    doi: "10.1136/bjsports-2023-107174",
                    authors: "Coenen P, Huysmans MA, Holtermann A, Troiano RP, Mork PJ, et al.",
                    citations: 22,
                    impactFactor: 18.4
                  },
                  
                  // 2023
                  {
                    title: "Tumor Necrosis Factor Receptor 1 in Non-small Cell Lung Cancer Patients and All-cause Mortality",
                    journal: "Strahlentherapie und Onkologie 199, S98-S98 (2023)",
                    doi: "10.1007/s00066-023-02092-8",
                    authors: "Bedir A, Hassan L, Vordermark D, Medenwald D"
                  },
                  {
                    title: "Physical activity trajectories at older age and all-cause mortality: a cohort study",
                    journal: "PLoS One 18(1), e0280878 (2023)",
                    doi: "10.1371/journal.pone.0280878",
                    authors: "Hassan L, Huhndorf P, Mikolajczyk R, Kluttig A",
                    citations: 6,
                    impactFactor: 3.7
                  },
                  
                  // 2022
                  {
                    title: "Cardiovascular risk factors, living and ageing in Halle: the CARLA study",
                    journal: "European Journal of Epidemiology 37(1), 103-116 (2022)",
                    doi: "10.1007/s10654-021-00833-8",
                    authors: "Hassan L, Efremov L, Großkopf A, Kartschmit N, Medenwald D, Schott A, et al.",
                    citations: 11,
                    impactFactor: 13.6
                  },
                  
                  // 2021
                  {
                    title: "Blood-brain barrier crossing renin-angiotensin drugs and cognition in the elderly: a meta-analysis",
                    journal: "Hypertension 78(3), 629-643 (2021)",
                    doi: "10.1161/HYPERTENSIONAHA.121.17049",
                    authors: "Ho JK, Moriarty F, Manly JJ, Larson EB, Evans DA, Rajan KB, Hudak EM, Hassan L, et al.",
                    citations: 79,
                    impactFactor: 8.3
                  },
                  {
                    title: "Socioeconomic disparities in head and neck cancer survival in Germany: a causal mediation analysis using population-based cancer registry data",
                    journal: "Journal of Cancer Research and Clinical Oncology 147(5), 1325-1334 (2021)",
                    doi: "10.1007/s00432-021-03531-8",
                    authors: "Bedir A, Abera SF, Efremov L, Hassan L, Vordermark D, Medenwald D",
                    citations: 16,
                    impactFactor: 3.6
                  },
                  
                  // 2020
                  {
                    title: "The association between change of soluble tumor necrosis factor receptor R1 (sTNF-R1) measurements and cardiovascular and all-cause mortality—Results from a large population-based cohort",
                    journal: "PLoS One 15(10), e0241213 (2020)",
                    doi: "10.1371/journal.pone.0241213",
                    authors: "Hassan L, Medenwald D, Tiller D, Kluttig A, Ludwig-Kraus B, Kraus FB, et al.",
                    citations: 8,
                    impactFactor: 3.7
                  },
                  {
                    title: "Design and quality control of the oral health status examination in the German National Cohort (GNC)",
                    journal: "Bundesgesundheitsblatt-Gesundheitsforschung-Gesundheitsschutz 63(4), 426-438 (2020)",
                    doi: "10.1007/s00103-020-03109-8",
                    authors: "Holtfreter B, Kocher T, Samietz S, Hertrampf K, Aarabi G, Hagenfeld D, et al.",
                    citations: 8
                  },
                  {
                    title: "Design und Qualitätskontrolle der zahnmedizinischen Untersuchung in der NAKO Gesundheitsstudie",
                    journal: "Bundesgesundheitsblatt-Gesundheitsforschung-Gesundheitsschutz 63(4), 426-438 (2020)",
                    doi: "10.1007/s00103-020-03109-8",
                    authors: "Holtfreter B, Samietz S, Hertrampf K, Aarabi G, Hagenfeld D, Kim TS, et al.",
                    citations: 1
                  },
                  {
                    title: "Is there an association between asthma and dental caries and molar incisor hypomineralisation?",
                    journal: "Caries Research 54(1), 87-95 (2020)",
                    doi: "10.1159/000504168",
                    authors: "Flexeder C, Kabary Hassan L, Standl M, Schulz H, Kühnisch J",
                    citations: 34,
                    impactFactor: 4.2
                  },
                  
                  // 2019
                  {
                    title: "The LoewenKIDS Study-life-course perspective on infections, the microbiome and the development of the immune system in early childhood",
                    journal: "International Journal of Epidemiology 48(4), 1042-1043 (2019)",
                    doi: "10.1093/ije/dyz009",
                    authors: "Gottschick C, Raupach-Rosin H, Langer S, Hassan L, Horn J, Dorendorf E, et al."
                  },
                  {
                    title: "Cohort Profile: The LoewenKIDS Study–life-course perspective on infections, the microbiome and the development of the immune system in early childhood",
                    journal: "International Journal of Epidemiology 48(4), 1042-1043 (2019)",
                    doi: "10.1093/ije/dyz009",
                    authors: "Gottschick C, Raupach-Rosin H, Langer S, Hassan L, Horn J, Dorendorf E, et al.",
                    citations: 13,
                    impactFactor: 9.7
                  },
                  
                  // 2018
                  {
                    title: "Relationship between caries experience and demarcated hypomineralised lesions (including MIH) in the permanent dentition of 15-year-olds",
                    journal: "Clinical Oral Investigations 22(5), 2013-2019 (2018)",
                    doi: "10.1007/s00784-017-2291-z",
                    authors: "Kühnisch J, Kabary L, Malyk Y, Rothmaier K, Metz I, Hickel R, Heinrich J, et al.",
                    citations: 64,
                    impactFactor: 3.4
                  }
                ].map((pub, index) => (
                  <div key={index} className="border-l-2 border-emerald-500 pl-4 py-3 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors rounded-r">
                    <h3 className="font-medium text-slate-800 dark:text-white">{pub.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{pub.authors || 'Authors not specified'}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{pub.journal}</p>
                    <div className="flex flex-wrap gap-4 mt-1">
                      {pub.doi && (
                        <a 
                          href={`https://doi.org/${pub.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center"
                        >
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.657l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.657l3-3a4 4 0 00-.225-5.865z"></path>
                          </svg>
                          Full Text
                        </a>
                      )}
                      {pub.citations && pub.citations > 0 && (
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                          <svg className="w-3 h-3 mr-1 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"></path>
                          </svg>
                          {pub.citations} Citations
                        </span>
                      )}
                      {pub.impactFactor && (
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          IF: {pub.impactFactor}
                        </span>
                      )}
                    </div>
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
