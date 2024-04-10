//Write a nextjs foot component
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const CustomFooter = () => (

    <footer className="font-questrial mx-12 mt-12 flex flex-col justify-center text-center md:flex-row">
    <a
      href="https://create.t3.gg/"
      className="m-2 flex-shrink-0 rounded border-2 border-gray-400 px-4 py-2 text-sm text-gray-600"
    >
      Made with t3
    </a>
    <a
      href="https://vercel.com//"
      className="m-2 flex-shrink-0 rounded border-2 border-gray-400 px-4 py-2 text-sm text-gray-600"
    >
      Hosted on vercel
    </a>
    <a
      href="https://chrisko.io/"
      className="m-2 flex-shrink-0 rounded border-2 border-gray-400 px-4 py-2 text-sm text-gray-600"
    >
      Based on an html template by Chrisko
    </a>
    <a
      href="https://tailwindcss.com/"
      className="m-2 flex-shrink-0 rounded border-2 border-gray-400 px-4 py-2 text-sm text-gray-600"
    >
      TailwindCSS
    </a>
    {/* <a
      href="https://vitejs.dev/"
      className="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0"
      >Vite</a
    > */}
    <a
      href="https://ionicons.com/"
      className="m-2 flex-shrink-0 rounded border-2 border-gray-400 px-4 py-2 text-sm text-gray-600"
    >
      Ionicons
    </a>
  </footer>

);

export default CustomFooter;