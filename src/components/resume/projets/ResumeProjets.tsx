import React from "react";
import Link from "next/link";

const ResumeProjets: React.FC = () => {
  return (
    <div id="PROJETS" className="space-y-8">
      <h2 className="mb-4 border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl">
        Projets
      </h2>

      <table className="table-auto border border-collapse rounded-lg shadow-lg overflow-hidden">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-300 py-2 pl-2 text-left font-bold uppercase tracking-widest rounded-tl-lg center">
        Nom du Projet
      </th>
      <th className="border border-gray-300 py-2 pl-2 text-left font-bold uppercase tracking-widest">
        Date
      </th>
      <th className="border border-gray-300 py-2 pl-2 text-left font-bold uppercase tracking-widest">
        Description
      </th>
      <th className="border border-gray-300 py-2 pl-2 text-left font-bold uppercase tracking-widest">
        Technologie utilisée
      </th>
      <th className="border border-gray-300 py-2 pl-2 text-left font-bold uppercase tracking-widest rounded-tr-lg">
        Liens
      </th>
    </tr>
  </thead>
  <tbody>
    {/* Project 1 */}
    <tr className="odd:bg-white even:bg-gray-100">
      <td className="border border-gray-300 py-2 pl-2 font-semibold">
        Scraping de calendrier
      </td>
      <td className="border border-gray-300 py-2 pl-2">2023 2024</td>
      <td className="border border-gray-300 py-2 pl-2">
        Mise en place d'un site pour accéder au planning des cours de ma
        formation en utilisant les fichiers ics fournis par le logiciel de
        gestion de planning de l'école.
      </td>
      <td className="border border-gray-300 py-2 pl-2">
        Golang, Railway.app, MongoDB
      </td>
      <td className="border border-gray-300 py-2 pl-2">
        <Link
          href="https://scform.romaingallez.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 text-blue-500 hover:text-blue-600"
        >
          Voir le projet
        </Link>
        <br />
        <Link
          href="https://github.com/romaingallez/mewo-calendar-web"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          Code source
        </Link>
      </td>
    </tr>
    <tr className="odd:bg-white even:bg-gray-100">
      <td className="border border-gray-300 py-2 pl-2 font-semibold">
        Virtualisation avec XCP-ng
      </td>
      <td className="border border-gray-300 py-2 pl-2">2023</td>
      <td className="border border-gray-300 py-2 pl-2">
        <div className="group relative">
          <a className="">PoC</a>
          <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            ✨ Proof of Concept - Preuve de concept
          </span>
          <a className="ml-1">pour un remplacement de l'infrastructure de virtualisation de mon
            employeur de VMware ESXi à XCP-ng.</a>
        </div>
      </td>
      <td className="border border-gray-300 py-2 pl-2">
        VMware ESXi, XCP-ng
      </td>
      <td className="border border-gray-300 py-2 pl-2">
        Aucun lien disponible
      </td>
    </tr>
    <tr className="odd:bg-white even:bg-gray-100">
      <td className="border border-gray-300 py-2 pl-2 font-semibold rounded-bl-lg">
        Proxmox SPICE CLI
      </td>
      <td className="border border-gray-300 py-2 pl-2">2023</td>
      <td className="border border-gray-300 py-2 pl-2">
        Développement d'une interface en ligne de commande pour la gestion
        de machine virtuelle sur serveur Proxmox.
      </td>
      <td className="border border-gray-300 py-2 pl-2">
        Golang, Spice, Proxmox, Cobra / Viper
      </td>
      <td className="border border-gray-300 py-2 pl-2 rounded-br-lg">
        <Link
          href="https://github.com/romaingallez/proxmox-spice-cli/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          Lien vers la dernière release
        </Link>
        <br />
        <Link
          href="https://github.com/romaingallez/proxmox-spice-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
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
