import React from "react";
import Link from "next/link";

const ResumeProjets: React.FC = () => {
  return (
    <div id="PROJETS" className="space-y-8">
      <h2 className="mb-4 border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl">
        Projets
      </h2>

      <table className="w-full">
        <thead>
          <tr>
            <th className="border-b border-gray-300 py-2 pl-2 text-left font-bold uppercase tracking-widest">
              Nom du Projet
            </th>
            <th className="border-b border-gray-300 py-2 pl-2 text-left font-bold uppercase tracking-widest">
              Date
            </th>
            <th className="border-b border-gray-300 py-2 pl-2 text-left font-bold uppercase tracking-widest">
              Description
            </th>
            <th className="border-b border-gray-300 py-2 pl-2 text-left font-bold uppercase tracking-widest">
              Technologie utilisée
            </th>
            <th className="border-b border-gray-300 py-2 pl-2 text-left font-bold uppercase tracking-widest">
              Liens
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Project 1 */}
          <tr>
            <td className="border-b border-gray-300 py-2 pl-2 font-semibold">
              Scraping de calendrier
            </td>
            <td className="border-b border-gray-300 py-2 pl-2">2023 2024</td>
            <td className="border-b border-gray-300 py-2 pl-2">
              Mise en place d'un site pour accéder au planning des cours de ma
              formation en utilisant les fichiers ics fournis par le logiciel de
              gestion de planning de l'école.
            </td>
            <td className="border-b border-gray-300 py-2 pl-2">
              Golang, Railway.app, MongoDB
            </td>
            <td className="border-b border-gray-300 py-2 pl-2">
              <Link
                href="https://scform.romaingallez.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Voir le projet
              </Link>{" "}
              |
              <Link
                href="https://github.com/romaingallez/mewo-calendar-web"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:text-blue-600"
              >
                Code source
              </Link>
            </td>
          </tr>

          {/* Project 2 */}
          <tr>
            <td className="border-b border-gray-300 py-2 pl-2 font-semibold">
              Virtualisation avec XCP-ng
            </td>
            <td className="border-b border-gray-300 py-2 pl-2">2023</td>
            
            <td className="border-b border-gray-300 py-2 pl-2">
              <div class="group relative">
                <a class="">PoC</a>
                <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  ✨ Proof of Concept - Preuve de concept
                </span>{" "}
                <a>pour un remplacement de l'infrastructure de virtualisation de mon
              employeur de VMware ESXi à XCP-ng.</a>
              </div> 
            </td>

            <td className="border-b border-gray-300 py-2 pl-2">
              VMware ESXi, XCP-ng
            </td>
            <td className="border-b border-gray-300 py-2 pl-2">
              Aucun lien disponible
            </td>
          </tr>

          {/* Project 3 */}
          <tr>
            <td className="border-b border-gray-300 py-2 pl-2 font-semibold">
              Proxmox SPICE CLI
            </td>
            <td className="border-b border-gray-300 py-2 pl-2">2023</td>
            <td className="border-b border-gray-300 py-2 pl-2">
              Développement d'une interface en ligne de commande pour la gestion
              de machine virtuelle sur serveur Proxmox.
            </td>
            <td className="border-b border-gray-300 py-2 pl-2">
              Golang, Spice, Proxmox, Cobra / Viper
            </td>
            <td className="border-b border-gray-300 py-2 pl-2">
              <Link
                href="https://github.com/romaingallez/proxmox-spice-cli/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Lien vers la dernière release
              </Link>{" "}
              |
              <Link
                href="https://github.com/romaingallez/proxmox-spice-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:text-blue-600"
              >
                Code source
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResumeProjets;
