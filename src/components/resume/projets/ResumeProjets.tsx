import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const ResumeProjets: React.FC = () => {
    return (
        <div id="PROJETS">
        <h2 className="mb-4 border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl">
          Projets
        </h2>
        <div>
          <h3 className="sm:text border-l-8 border-black pl-2 font-bold uppercase tracking-widest">
            Scraping de calendrier
          </h3>
          <section className="mb-6">
            <div className="mb-2 italic">2023</div>
          </section>
          <section className="mb-6">
            <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Description:
            </div>
            <div className="w-full lg:inline-block lg:w-8/12">
              <p>
                Mise en place d'un site pour acceder au planning des
                cours de ma formation en utilisant les fichier ics
                fournis par le logiciel de gestion de planning de
                l'école.
              </p>
              {/* Links to project and code repository */}
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
            </div>
          </section>
          <section className="mb-6">
            <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Technologie utilisée:
            </div>
            <div className="w-full lg:inline-block lg:w-8/12">
              <span className="rounded-xl bg-gray-300 px-3">
                Golang
              </span>
              <span className="rounded-xl bg-gray-300 px-3">
                Railway.app
              </span>
              <span className="rounded-xl bg-gray-300 px-3">
                MongoDB
              </span>
            </div>
          </section>
        </div>
        <div>
          <h3 className="sm:text border-l-8 border-black pl-2 font-bold uppercase tracking-widest">
            Virtualisation avec XCP-ng
          </h3>
          <section className="mb-6">
            <div className="mb-2 italic">2023</div>
          </section>
          <section className="mb-6">
            <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Description:
            </div>
            <div className="w-full lg:inline-block lg:w-8/12">
              <p>
                Poc pour un remplacement de l'infrastructure de
                virtualisation de mon employeur de VMware ESXi à XCP-ng
              </p>
              <div>
                <section className="pt-5">
                  - Mise en place d'un cluster XCP-ng sur un
                  environnements de test
                </section>
                <section className="">
                  - Ecriture de procédure de migration des VMs avec un
                  minimum d'impact
                </section>
                <section className="">
                  - Mise en place d'un solutions de sauvegarde et de
                  restauration
                </section>
                <section className="">
                  - Mise en place d'un monitoring de l'infrastructure
                </section>
                <br></br>
                Malheureusement, le projet n'a pas pu etre mené à son
                terme, mais il m'a permis de découvrir une nouvelle
                technologie et de renforcer mes compétences en
                virtualisation.
              </div>
            </div>
          </section>
          <section className="mb-6">
            <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Technologie utilisée:
            </div>
            <div className="w-full lg:inline-block lg:w-8/12">
              <span className="rounded-xl bg-gray-300 px-3">
                VMware ESXi
              </span>
              <span className="rounded-xl bg-gray-300 px-3">
                XCP-ng
              </span>
            </div>
          </section>
        </div>

        <div>
          <h3 className="sm:text border-l-8 border-black pl-2 font-bold uppercase tracking-widest">
            Proxmox SPICE CLI
          </h3>
          <section className="mb-6">
            <div className="mb-2 italic">2023</div>
          </section>
          <section className="mb-6">
            <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Description:
            </div>
            <div className="w-full lg:inline-block lg:w-8/12">
              <p>
                Developpement d'une interface en ligne de commande pour
                la gestion de machine virtuelle sur serveur Proxmox
              </p>
              <Link
                href="https://github.com/romaingallez/proxmox-spice-cli/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Lien vers la derniere release
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
              <div></div>
            </div>
          </section>
          <section className="mb-6">
            <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Technologie utilisée:
            </div>
            <div className="w-full lg:inline-block lg:w-8/12">
              <span className="rounded-xl bg-gray-300 px-3">
                Golang
              </span>
              <span className="rounded-xl bg-gray-300 px-3">
                Spice
              </span>
              <span className="rounded-xl bg-gray-300 px-3">
                Proxmox
              </span>
              <span className="rounded-xl bg-gray-300 px-3">
                Cobra / Viper
              </span>

            </div>
          </section>
        </div>
      </div>
    );
};

export default ResumeProjets;