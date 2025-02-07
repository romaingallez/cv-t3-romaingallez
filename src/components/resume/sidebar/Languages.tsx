import React from "react";
import Image from "next/image";

const Languages: React.FC = () => {
  return (
    <div className="mb-12 px-2 text-lg font-light">
      <h2 className="mb-4 text-xl font-semibold">Languages</h2>
      <div className="my-3 flex items-center">
        <Image
          src="/logo_go.svg"
          className="mr-4 inline"
          alt="Go Logo"
          width={25}
          height={15}
        />
        <span>Go</span>
      </div>
      <div className="my-3 flex items-center">
        <Image
          src="/logo_python.svg"
          className="mr-4 inline"
          alt="Python Logo"
          width={25}
          height={15}
        />
        <span>Python</span>
      </div>
    </div>
  );
};

export default Languages;
