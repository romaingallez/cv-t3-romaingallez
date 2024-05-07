import React from "react";

const ResumeExperiancesV2: React.FC = () => {
  const experiences = [
    {
      company: "Centre de Gestion de la Fonction Publique Territoriale de la Moselle",
      duration: "Depuis Septembre 2023",
      position: "Développeur fullstack",
      tasks: [
        "Conception et développement d'applications web internes.",
        "Participation au développement d'une application pour la gestion de la mission RGPD du CDG57.",
        "Participation au développement d'une application pour mission promotion interne du CDG57.",
        "Création de scripts pour automatiser des tâches récurrentes.",
      ],
      tools: ["Symfony", "MariaDB", "Nginx", "Ubuntu Serveur", "Github"],
    },
    {
      company: "Centre de Gestion de la Fonction Publique Territoriale de la Moselle",
      duration: "De Septembre 2019 à Août 2023",
      position: "Administrateur système et réseau",
      tasks: [
        "Gestion et maintenance proactive du parc informatique.",
        "Pilotage du déploiement et de la maintenance des infrastructures serveur.",
        "Contribution à la stratégie de cybersécurité.",
      ],
      tools: ["WAPT", "Veeam", "GLPI", "WSUS", "VMware ESXi", "Docker", "Windows Server"],
    },
    // {
    //   company: "Centre de Gestion de la Fonction Publique Territoriale de la Moselle",
    //   duration: "Septembre 2019 à Août 2022",
    //   position: "Technicien informatique",
    //   tasks: [
    //     "Développement et mise en œuvre de solutions d'accessibilité.",
    //     "Réussite dans la migration d'un service internet interne.",
    //     "Engagement dans des tâches de maintenance préventive et corrective.",
    //   ],
    //   tools: ["Windows Server", "VMware ESXi", "Adobe Acrobat DC"],
    // },
  ];

  return (
    <div id="EXPERIENCES" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <h2 className="mb-2 border-l-4 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl col-span-full">
        Expériences Professionnelles
      </h2>

      {experiences.map((exp, index) => (
        <div key={index}>
          <h3 className="border-l-4 border-black pl-2 font-bold uppercase tracking-widest sm:text-lg">
            {exp.company}
          </h3>
          <section className="my-2">
            <div className="italic mb-1">{exp.duration} :</div>
            <div>{exp.position}</div>
          </section>
          <section className="my-2">
            <h4 className="italic mb-1">Tâches principales :</h4>
            <ul className="list-disc pl-5">
              {exp.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </section>
          <section className="my-2">
            <h4 className="italic mb-1">Outils et technologies :</h4>
            <div className="flex flex-wrap gap-1">
              {exp.tools.map((tool, idx) => (
                <span key={idx} className="rounded-xl bg-gray-300 px-2 py-1">
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ResumeExperiancesV2;
