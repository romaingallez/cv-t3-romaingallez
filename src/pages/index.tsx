import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "@fontsource/questrial";
import { useSearchParams } from "next/navigation";
import MetaTags from "src/components/MetaTags";
import CustomFooter from "src/components/CustomFooter";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  // calculate the age from the birthdate
  const birthdate = "1999-05-04";
  const age = Math.floor(
    (new Date().getTime() - new Date(birthdate).getTime()) / 3.15576e10
  );

  // const age = "24";
  // const phone = "1234567890"; // Replace with your phone number
  const searchParams = useSearchParams();

  let showEmail = false;
  const email = searchParams.get("email");

  if (email) {
    showEmail = true;
  } else {
    showEmail = false;
  }

  const phone = searchParams.get("phone");
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
      <MetaTags
        title="CV romaingallez"
        description="Mon CV en ligne"
        image="https://cv.romaingallez.fr/resume.png"
        url="https://cv.romaingallez.fr"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-questrial container mx-auto max-w-screen-xl w-full px-4 sm:px-0">
        <main
          id="wrapper"
          className="flex-row flex-wrap shadow-2xl sm:m-12 flex-col-reverse sm:flex-row"
        >
          <div className="md:flex w-full">
            {/* Sidebar */}
            <div
              id="sidebar"
              className="w-full bg-gradient-to-b from-indigo-300 via-green-300 to-white p-8 sm:max-w-sm sm:w-1/4"
            >
              {/* Profile photo */}
              <div className="mt-8 flex flex-col items-center">
                <Image
                  src="/romain_1676977478655.jpeg"
                  alt="user"
                  className="mx-auto mb-2 w-48 rounded-full"
                  width={200}
                  height={200}
                />
                <h2 className="mt-4 text-xl font-medium">Romain GALLEZ</h2>
                <h3>
                  Développeur Junior | DevOps
                </h3>
              </div>
              <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
              <div>
                <div className="mb-12 px-2 text-lg font-light">
                  <h2 className="mb-4 text-xl font-semibold">Contact</h2>

                  {showEmail ? (
                    <div className="my-3 flex items-center">
                      <Image
                        src="/mail-outline.svg"
                        className="mr-4 inline w-6"
                        alt="Email icon"
                        width={200}
                        height={200}
                      />
                      {email ? (
                        <a href={`mailto:${email}`}>{email}</a>
                      ) : (
                        <span>Email not available</span>
                      )}
                    </div>
                  ) : (
                    <div className="my-3 flex items-center">
                      <Image
                        src="/mail-outline.svg"
                        className="mr-4 inline w-6"
                        alt="Email icon"
                        width={200}
                        height={200}
                      />
                      <Link href="/contact">Contact</Link>
                    </div>
                  )}

                  {showPhone && (
                    <div className="my-3 flex items-center">
                      <Image
                        src="/call-outline.svg"
                        className="mr-4 inline w-6"
                        alt="Phone icon"
                        width={200}
                        height={200}
                      />
                      {phone ? (
                        <a href={`tel:${phone}`}>{phoneSpaced}</a>
                      ) : (
                        <span>Phone number not available</span>
                      )}
                    </div>
                  )}

                  <div className="my-3 flex items-center">
                    <Image
                      src="/home-outline.svg"
                      className="mr-4 inline w-6 pb-1"
                      alt="House icon"
                      width={200}
                      height={200}
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
                    <Image
                      src="/egg-outline.svg"
                      className="mr-4 inline w-6"
                      alt="Egg Icon"
                      width={200}
                      height={200}
                    />
                    <span>{age} ans</span>
                  </div>
                </div>

                <div className="mb-12 px-2 text-lg font-light">
                  <h2 className="mb-4 text-xl font-semibold">Sur internet</h2>
                  <div className="my-3 flex items-center">
                    <Image
                      src="/logo-github.svg"
                      className="mr-4 inline w-6"
                      alt="GitHub Logo"
                      width={200}
                      height={200}
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
                    <Image
                      src="/logo-linkedin.svg"
                      className="mr-4 inline w-6"
                      alt="LinkedIn Logo"
                      width={200}
                      height={200}
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
                {/* Add a zone with my language skill (french natif speeaker) english Linguaskill 180+ C1 */}
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
                    <span>Français <br />(langue maternelle)</span>
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
              </div>
            </div>

            {/* Main content area */}
            <div className="w-full bg-white p-8 sm:w-3/4">
              <div id="profile" className="prose">
                <h2 className="border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl mb-2">
                  Profile
                </h2>
                <p className="mb-2">
                Actuellement en première année de Master en alternance dans un cursus axé sur le développement informatique, après avoir obtenu un Bac +3 en administration de systèmes et réseaux, je poursuis mon ambition de diversifier mes compétences.{'\n'}  
                </p>
                <p className="mb-2">Mon objectif est d'explorer la galaxie DevOps, un domaine qui allie l'administration systèmes et réseaux à la programmation et au développement continu.</p>
                <p className="mb-2">Mon parcours antérieur en tant qu'administrateur systèmes et réseaux au sein de la fonction publique territoriale durant ma troisième année d'alternance m'a permis d'acquérir une solide expertise dans plusieurs domaines.</p>
                <h3 className="text-2l mb-2 mt-4 font-semibold">
                  Administration de systèmes :
                </h3>
                <p className="mb-2">
                Mon expérience m'a conféré une maîtrise approfondie de divers outils et systèmes tels que Linux, Docker, Proxmox, XCP-ng et Windows Active Directory, renforçant ainsi ma base technique.
                </p>

                <h3 className="text-2l mb-2 mt-4 font-semibold">Cloud :</h3>
                <p className="mb-2">
                J'ai eu l'opportunité de travailler avec différentes solutions cloud telles que OVHCLOUD, AWS, Clever Cloud et Railway.app, enrichissant ma compréhension des environnements cloud et des architectures distribuées.
                </p>

                <h3 className="text-2l mb-2 mt-4 font-semibold">
                  Programmation :
                </h3>
                <p className="mb-2">
                La pratique de Python et Golang, intégrée à mon parcours académique et professionnel, m'a permis de développer une solide compréhension des langages de programmation.
                </p>
                <p className="mb-2">
                Cette compétence complète idéalement mon profil d'administrateur systèmes et réseaux, me positionnant de manière favorable pour embrasser les challenges liés aux métiers DevOps.
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
                        Depuis Septembre.&nbsp;2022:
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
                        Septembre 2019 à Août 2022: Technicien informatique
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
                    <br />
                  <h3 className="border-l-8 border-black pl-2 text-sm font-bold uppercase tracking-widest">
                    EXPERT EN SYSTÈMES D'INFORMATION - DÉVELOPPEUR INFORMATIQUE
                  </h3>
                  <p>
                    Depuis Septembre 2023
                    <span className="text-gray-700"> Mewo informatique</span>
                  </p>
                  <br />
                  <h3 className="border-l-8 border-black pl-2 text-sm font-bold uppercase tracking-widest">
                    ADMINISTRATEUR DES SYSTÈMES D'INFORMATION
                  </h3>
                  <p>
                    Septembre 2022 à Juillet 2023
                    <span className="text-gray-700"> Mewo informatique</span>
                  </p>
                  <br />
                  <h3 className="border-l-8 border-black pl-2 text-sm/[17px] font-bold uppercase tracking-widest">
                    TECHNICIEN D’INFRASTRUCTURE INFORMATIQUE ET SÉCURITÉ
                  </h3>
                  <p>
                    Septembre 2020 à Août 2022
                    <span className="text-gray-700"> Mewo informatique</span>
                  </p>
                  <br />
                  <h3 className="border-l-8 border-black pl-2 text-sm/[17px] font-bold uppercase tracking-widest">
                    MIM - Mathematique Mecanique Informatique
                  </h3>
                  <p>
                    Septembre 2017 à Juillet 2020
                    <span className="text-gray-700"> Université de Lorraine</span>
                  </p>
                  <br />
                  <h3 className="border-l-8 border-black pl-2 text-sm/[17px] font-bold uppercase tracking-widest">
                    Bac STi2D ITEC
                  </h3>
                  <p>
                    Septembre 2014 à Août 2017
                    <span className="text-gray-700"> Lycée Henri Nominé</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <CustomFooter />

      </div>
    </>
  );
}