import React from "react";

const ResumeIntroPlusTrois: React.FC = () => {
  return (
    <div id="profile" className="prose">
      <h2 className="mb-2 border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl">
        Profile
      </h2>
      <p className="mb-2">
        Actuellement en première année de Master en alternance dans un cursus
        axé sur le développement informatique, après avoir obtenu un Bac +3 en
        administration de systèmes et réseaux, je poursuis mon ambition de
        diversifier mes compétences.
        {"\n"}
      </p>
      <p className="mb-2">
        Je souhaite explorer la galaxie DevOps, car cela permet d'ailler mes
        compétences en développement et administration système. 
      </p>
      <p className="mb-2">
        Mon parcours antérieur en tant qu'administrateur systèmes et réseaux au
        sein de la fonction publique territoriale durant ma troisième année
        d'alternance m'a permis d'acquérir une solide expertise dans plusieurs
        domaines.
      </p>
      <h3 className="text-2l mb-2 mt-4 font-semibold">
        Administration de systèmes :
      </h3>
      <p className="mb-2">
        Mon expérience m'a conféré une maîtrise approfondie de divers outils et
        systèmes tels que Linux, Docker, Proxmox, XCP-ng et Windows Active
        Directory, renforçant ainsi ma base technique.
      </p>

      <h3 className="text-2l mb-2 mt-4 font-semibold">Cloud :</h3>
      <p className="mb-2">
        J'ai eu l'opportunité de travailler avec différentes solutions cloud
        telles que OVHcloud, AWS, CleverCloud et Railway.app, enrichissant ma
        compréhension des environnements cloud et des architectures distribuées.
      </p>

      <h3 className="text-2l mb-2 mt-4 font-semibold">Programmation :</h3>
      <p className="mb-2">
        La pratique de Python et Golang, intégrée à mon parcours académique et
        professionnel, m'a permis de développer une solide compréhension des
        langages de programmation.
      </p>
      <p className="mb-2">
        Cette compétence complète idéalement mon profil d'administrateur
        systèmes et réseaux, me positionnant de manière favorable pour embrasser
        les défis liés aux métiers DevOps.
      </p>
    </div>
  );
};

export default ResumeIntroPlusTrois;
