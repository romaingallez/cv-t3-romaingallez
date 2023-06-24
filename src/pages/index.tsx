import Head from "next/head";
import "@fontsource/questrial";

// import Link from "next/link";
// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const age = "24";

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="CV Romain GALLEZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-questrial container mx-auto max-w-screen-xl">
        <main
          id="wrapper"
          className="flex-row flex-wrap shadow-2xl sm:m-12 sm:flex-nowrap"
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quam quaerat deserunt molestiae praesentium aliquam, ut eos quas magni vel vero minima, qui dolorum. Commodi placeat ipsam qui voluptas natus!</p>
        </main>
        <p>{age}</p>
      </div>

      <footer className="font-questrial mx-12 mt-12 flex flex-col justify-center text-center md:flex-row">
        <a
          href="https://create.t3.gg/"
          className="m-2 flex-shrink-0 rounded border-2 border-gray-400 px-4 py-2 text-sm text-gray-600"
        >
          Made with t3
        </a>
        <a
          href="https://clever-cloud.com"
          className="m-2 flex-shrink-0 rounded border-2 border-gray-400 px-4 py-2 text-sm text-gray-600"
        >
          Hosted on clever-cloud.com
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
    </>
  );
}
