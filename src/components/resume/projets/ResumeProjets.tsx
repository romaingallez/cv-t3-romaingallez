import React from 'react';
import Link from "next/link";

const ResumeProjets: React.FC = () => {
    return (
        <div id="PROJETS" className="space-y-8">
        <h2 className="mb-4 border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl">
          Projets
        </h2>

        {/* Project 1 */}
        <div>
          <h3 className="text-lg border-l-8 border-black pl-2 font-bold uppercase tracking-widest">
            Scraping de calendrier
          </h3>
          <section className="mb-6">
            <p className="italic">2023</p>
          </section>
          <section className="mb-6">
            <p className="mb-2 italic">Description:</p>
            <p>
              Mise en place d'un site pour accéder au planning des
              cours de ma formation en utilisant les fichiers ics
              fournis par le logiciel de gestion de planning de
              l'école.
            </p>
            <p className="mt-2">
              <Link
                href="https://scform.romaingallez.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Voir le projet
              </Link>
              {" | "}
              <Link
                href="https://github.com/romaingallez/mewo-calendar-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Code source
              </Link>
            </p>
          </section>
          <section className="mb-6">
            <p className="mb-2 italic">Technologie utilisée:</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-xl bg-gray-300 px-3 py-1">Golang</span>
              <span className="rounded-xl bg-gray-300 px-3 py-1">Railway.app</span>
              <span className="rounded-xl bg-gray-300 px-3 py-1">MongoDB</span>
            </div>
          </section>
        </div>

        {/* Project 2 */}
        <div>
          <h3 className="text-lg border-l-8 border-black pl-2 font-bold uppercase tracking-widest">
            Virtualisation avec XCP-ng
          </h3>
          <section className="mb-6">
            <p className="italic">2023</p>
          </section>
          <section className="mb-6">
            <p className="mb-2 italic">Description:</p>
            <p>
              Poc pour un remplacement de l'infrastructure de
              virtualisation de mon employeur de VMware ESXi à XCP-ng.
            </p>
            <ul className="list-disc pl-5">
              <li>Mise en place d'un cluster XCP-ng sur un environnement de test.</li>
              <li>Écriture de procédure de migration des VMs avec un minimum d'impact.</li>
              <li>Mise en place d'une solution de sauvegarde et de restauration.</li>
              <li>Mise en place d'un monitoring de l'infrastructure.</li>
            </ul>
            <p className="mt-2">
              Malheureusement, le projet n'a pas pu être mené à son terme, mais il m'a permis de découvrir une nouvelle technologie et de renforcer mes compétences en virtualisation.
            </p>
          </section>
          <section className="mb-6">
            <p className="mb-2 italic">Technologie utilisée:</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-xl bg-gray-300 px-3 py-1">VMware ESXi</span>
              <span className="rounded-xl bg-gray-300 px-3 py-1">XCP-ng</span>
            </div>
          </section>
        </div>

        {/* Project 3 */}
        <div>
          <h3 className="text-lg border-l-8 border-black pl-2 font-bold uppercase tracking-widest">
            Proxmox SPICE CLI
          </h3>
          <section className="mb-6">
            <p className="italic">2023</p>
          </section>
          <section className="mb-6">
            <p className="mb-2 italic">Description:</p>
            <p>
              Développement d'une interface en ligne de commande pour
              la gestion de machine virtuelle sur serveur Proxmox.
            </p>
            <p className="mt-2">
              <Link
                href="https://github.com/romaingallez/proxmox-spice-cli/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Lien vers la dernière release
              </Link>
              {" | "}
              <Link
                href="https://github.com/romaingallez/proxmox-spice-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Code source
              </Link>
            </p>
          </section>
          <section className="mb-6">
            <p className="mb-2 italic">Technologie utilisée:</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-xl bg-gray-300 px-3 py-1">Golang</span>
              <span className="rounded-xl bg-gray-300 px-3 py-1">Spice</span>
              <span className="rounded-xl bg-gray-300 px-3 py-1">Proxmox</span>
              <span className="rounded-xl bg-gray-300 px-3 py-1">Cobra / Viper</span>
            </div>
          </section>
        </div>
      </div>
    );
};

export default ResumeProjets;