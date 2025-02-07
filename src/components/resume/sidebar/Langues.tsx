import React from "react";
import Image from "next/image";

const Langues: React.FC = () => {
  return (
    <div className="mb-12 px-2 text-lg font-light">
      <h2 className="mb-4 text-xl font-semibold">Langues</h2>
      <div className="my-3 flex items-center">
        <Image
          src="/flag_fr.svg"
          className="mr-4 inline"
          alt="French Flag"
          width={25}
          height={15}
        />
        <span>
          Français <br />
          (langue maternelle)
        </span>
      </div>
      <div className="my-3 flex items-center">
        <Image
          src="/flag_uk.svg"
          className="mr-4 inline"
          alt="UK Flag"
          width={25}
          height={15}
        />
        <span>Anglais (niveau C1)</span>
      </div>
    </div>
  );
};

export default Langues;
