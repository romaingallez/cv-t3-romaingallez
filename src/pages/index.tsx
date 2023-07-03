import Head from "next/head";
import "@fontsource/questrial";
import { useSearchParams } from 'next/navigation'


export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
// calculate the age from the birthdate
  const birthdate = "1999-05-04";
  const age = Math.floor(
    (new Date().getTime() - new Date(birthdate).getTime()) / 3.15576e10
  );
  
  // const age = "24";
  // const phone = "1234567890"; // Replace with your phone number
  const searchParams = useSearchParams()
  const phone = searchParams.get('phone')
  let showPhone;
  let phoneSpaced;
  
  if (phone) {

    showPhone = true;
    
    phoneSpaced = phone.replace(
      /(.{2})(.{2})(.{2})(.{2})(.{2})/,
      "$1 $2 $3 $4 $5"
    );
    // console.log(phoneSpaced);
  } else {
    showPhone = false;
    // console.log("Phone parameter not found");
  }



  //read the from the query named "phone"

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
          <div className="flex w-full">
            {/* Sidebar */}
            <div
              id="sidebar"
              className="w-full bg-gradient-to-b from-indigo-300 via-green-300 to-white p-8 sm:max-w-sm"
            >
              {/* Profile photo */}
              <div className="mt-8 flex flex-col items-center">
                <img
                  src="/romain_1676977478655.jpeg"
                  alt="user"
                  className="mx-auto mb-2 w-48 rounded-full"
                />
                <h2 className="mt-4 text-xl font-medium">Romain GALLEZ</h2>
                <h3>
                  Développeur Junior DevOps <br /> Administrateur système Linux
                </h3>
              </div>
              <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
              <div>
                <div className="mb-12 px-2 text-lg font-light">
                  <h2 className="mb-4 text-xl font-semibold">Contact</h2>
                  <div className="my-3 flex items-center">
                    <img
                      src="/mail-outline.svg"
                      className="mr-4 inline w-6"
                      alt="Mail icon"
                    />
                    <a href="/contact">Formulaire de contact</a>
                  </div>

                  {showPhone && (
                    <div className="my-3 flex items-center">
                      <img
                        src="/call-outline.svg"
                        className="mr-4 inline w-6"
                        alt="Phone icon"
                      />
                      <a href={`tel:{phone}`}>{phoneSpaced}</a>
                    </div>
                  )}


                  <div className="my-3 flex items-center">
                    <img
                      src="/home-outline.svg"
                      className="mr-4 inline w-6 pb-1"
                      alt="House icon"
                    />
                    <div>
                      <p></p>
                      <p>Metz</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 px-2 text-lg font-light">
                  <h2 className="mb-4 text-xl font-semibold">Info</h2>
                  <div className="my-3 flex items-center">
                    <img
                      src="/egg-outline.svg"
                      className="mr-4 inline w-6"
                      alt="Egg Icon"
                    />
                    <span>{age} ans</span>
                  </div>
                </div>

                <div className="mb-12 px-2 text-lg font-light">
                  <h2 className="mb-4 text-xl font-semibold">Sur internet</h2>
                  <div className="my-3 flex items-center">
                    <img
                      src="/logo-github.svg"
                      className="mr-4 inline w-6"
                      alt="GitHub Logo"
                    />
                    <a
                      href="https://github.com/romaingallez"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="my-3 flex items-center">
                    <img
                      src="/logo-linkedin.svg"
                      className="mr-4 inline w-6"
                      alt="LinkedIn Logo"
                    />
                    <a
                      href="https://www.linkedin.com/in/romaingallez/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div className="w-full bg-white p-8 sm:w-3/4">
              <div id="profile" className="prose">
                <h2 className="border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl">
                  Profil
                </h2>
                <p className="mb-2">
                  Actuellement en troisième année d'alternance en tant
                  qu'administrateur systèmes et réseaux au sein de la fonction
                  publique territoriale.
                </p>
              </div>
              <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />

              <div id="EXPERIANCES">
                <h2 className="mb-4 border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl">
                  Experience
                </h2>
                <div>
                  <div>
                    <h3 className="sm:text border-l-8 border-black pl-2 font-bold uppercase tracking-widest">
                      Centre de gestion de la fonction publique
                    </h3>
                    <section className="mb-6">
                      <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                        Depuis Août.&nbsp;2020:
                      </div>
                      <div className="w-full lg:inline-block lg:w-8/12">
                        Administrateur système et réseau
                      </div>
                    </section>
                    <section className="mb-6">
                      <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                        Tâche:
                      </div>
                      <div className="w-full lg:inline-block lg:w-8/12">
                        <p>
                          - L'administration du parc informatique du centre de
                          gestion (~50 stations de travail, 2 serveurs VMware
                          ESXi, multiple machine virtuelle)
                        </p>
                        <p>
                          - Le déploiement et la maintenance du serveur pour la
                          mission RGPD du cdg57
                        </p>
                      </div>
                    </section>
                    <section className="mb-6">
                      <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                        Description:
                      </div>
                      <div className="w-full lg:inline-block lg:w-8/12"></div>
                    </section>
                    <section className="mb-6">
                      <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                        Outils:
                      </div>
                      <div className="w-full lg:inline-block lg:w-8/12">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <span className="rounded-xl bg-gray-300 px-3">
                                  WAPT
                                </span>
                              </td>
                              <td>
                                <span className="rounded-xl bg-gray-300 px-3">
                                  Veeam
                                </span>
                              </td>
                              <td>
                                <span className="rounded-xl bg-gray-300 px-3">
                                  GLPI
                                </span>
                              </td>
                              <td>
                                <span className="rounded-xl bg-gray-300 px-3">
                                  WSUS
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <span className="rounded-xl bg-gray-300 px-3">
                                  VMware ESXi
                                </span>
                              </td>
                              <td>
                                <span className="rounded-xl bg-gray-300 px-3">
                                  Docker
                                </span>
                              </td>
                              <td>
                                <span className="rounded-xl bg-gray-300 px-3">
                                  Windows Server
                                </span>
                              </td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>
                  </div>

                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

                  <div>
                    <h3 className="sm:text border-l-8 border-black pl-2 font-bold uppercase tracking-widest">
                      Centre de gestion de la fonction publique
                    </h3>
                    <section className="mb-6">
                      <div className="mb-2 italic">
                        Septembre 2019 à janvier 2020: Technicien informatique
                      </div>
                    </section>
                    <section className="mb-6">
                      <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                        Tâche:
                      </div>
                      <div className="w-full lg:inline-block lg:w-8/12">
                        <p>
                          Mise en disponibilité aux Malvoyants des documents
                          nécessaires dans les collectivités du département
                        </p>
                        <p>
                          Migration d'un service internet interne d'un serveur
                          physique en virtualisation (VMware ESXi)
                        </p>
                        <p>
                          Diverses tâches de maintenance et organisationnelles
                        </p>
                      </div>
                    </section>
                    <section className="mb-6">
                      <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                        Outils:
                      </div>
                      <div className="w-full lg:inline-block lg:w-8/12">
                        <span className="rounded-xl bg-gray-300 px-3">
                          Windows Server
                        </span>
                        <span className="rounded-xl bg-gray-300 px-3">
                          VMware ESXi
                        </span>
                        <span className="rounded-xl bg-gray-300 px-3">
                          Adobe Acrobat DC
                        </span>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />

              <div id="formation">
                <h2 className="border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl">
                  Formation
                </h2>
                <div className="mb-12 px-2 text-lg font-light">
                  <h3 className="m-2 border-l-8 border-black pl-2 text-sm font-bold uppercase tracking-widest">
                    ADMINISTRATEUR DES SYSTÈMES D'INFORMATION
                  </h3>
                  <p>
                    Depuis Septembre 2022{" "}
                    <span className="text-gray-700">Mewo informatique</span>
                  </p>
                  <br />
                  <h3 className="border-l-8 border-black pl-2 text-sm/[17px] font-bold uppercase tracking-widest">
                    TECHNICIEN D’INFRASTRUCTURE INFORMATIQUE ET SÉCURITÉ
                  </h3>
                  <p>
                    Septembre 2020 à Juillet 2022
                    <span className="text-gray-700"> Mewo informatique</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <p>{age}</p> */}
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
