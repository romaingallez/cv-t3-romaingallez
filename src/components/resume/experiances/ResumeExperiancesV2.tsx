import React from "react";

const ResumeExperiancesV1: React.FC = () => {
  return (
    <div id="EXPERIENCES">
      <h2 className="mb-4 border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl">
        Expériences Professionnelles
      </h2>
      <div>
        <div>
          <h3 className="border-l-8 border-black pl-2 font-bold uppercase tracking-widest sm:text-lg">
            Centre de Gestion de la Fonction Publique Territoriale de la Moselle
          </h3>
          <section className="mb-6">
            <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Depuis Septembre 2022 :
            </div>
            <div className="w-full lg:inline-block lg:w-8/12">
              Administrateur système et réseau
            </div>
          </section>
          <section className="mb-6">
            <h4 className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Tâches principales :
            </h4>
            <ul className="w-full list-disc pl-5 lg:inline-block lg:w-8/12">
              <li>
                Gestion et maintenance proactive du parc informatique, incluant
                environ 50 stations de travail et plusieurs serveurs virtuels
                sous VMware ESXi, assurant ainsi une disponibilité et une
                sécurité optimales des systèmes.
              </li>
              <li>
                Pilotage du déploiement et de la maintenance des infrastructures
                serveur dédiées à la conformité RGPD du cdg57, garantissant la
                protection des données à caractère personnel.
              </li>
              <li>
                Contribution significative à la stratégie de cybersécurité, par
                l'implémentation de solutions de sécurité avancées et la
                sensibilisation des utilisateurs aux bonnes pratiques.
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h4 className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Outils et technologies :
            </h4>
            <div className="w-full lg:inline-block lg:w-8/12">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-xl bg-gray-300 px-3 py-1">WAPT</span>
                <span className="rounded-xl bg-gray-300 px-3 py-1">Veeam</span>
                <span className="rounded-xl bg-gray-300 px-3 py-1">GLPI</span>
                <span className="rounded-xl bg-gray-300 px-3 py-1">WSUS</span>
                <span className="rounded-xl bg-gray-300 px-3 py-1">
                  VMware ESXi
                </span>
                <span className="rounded-xl bg-gray-300 px-3 py-1">Docker</span>
                <span className="rounded-xl bg-gray-300 px-3 py-1">
                  Windows Server
                </span>
              </div>
            </div>
          </section>
        </div>

        <div>
          <h3 className="border-l-8 border-black pl-2 font-bold uppercase tracking-widest sm:text-lg">
            CENTRE DE GESTION DE LA FONCTION PUBLIQUE TERRITORIALE DE LA MOSELLE
          </h3>
          <section className="mb-6">
            <div className="mb-2 italic">
              Septembre 2019 à Août 2022 : Technicien informatique
            </div>
          </section>
          <section className="mb-6">
            <h4 className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Tâches principales :
            </h4>
            <ul className="w-full list-disc pl-5 lg:inline-block lg:w-8/12">
              <li>
                Développement et mise en œuvre de solutions d'accessibilité pour
                les malvoyants, permettant l'accès aux documents essentiels dans
                les collectivités du département.
              </li>
              <li>
                Réussite dans la migration d'un service internet interne vers
                une infrastructure virtualisée sous VMware ESXi, améliorant
                ainsi l'efficacité et la résilience des services.
              </li>
              <li>
                Engagement dans des tâches de maintenance préventive et
                corrective, ainsi que dans des activités organisationnelles,
                contribuant à l'optimisation continue de l'infrastructure IT.
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h4 className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Outils et technologies :
            </h4>
            <div className="w-full lg:inline-block lg:w-8/12">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-xl bg-gray-300 px-3 py-1">
                  Windows Server
                </span>
                <span className="rounded-xl bg-gray-300 px-3 py-1">
                  VMware ESXi
                </span>
                <span className="rounded-xl bg-gray-300 px-3 py-1">
                  Adobe Acrobat DC
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeExperiancesV1;
