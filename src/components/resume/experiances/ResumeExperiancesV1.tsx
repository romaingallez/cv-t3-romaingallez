import React from "react";

const ResumeExperiancesV1: React.FC = () => {
  return (
    <div id="EXPERIANCES">
      <h2 className="mb-4 border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl">
        Experience
      </h2>
      <div>
        <div>
          <h3 className="sm:text border-l-8 border-black pl-2 font-bold uppercase tracking-widest">
            Centre de Gestion de la Fonction Publique Territoriale de la Moselle
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
                - L'administration du parc informatique du centre de gestion
                (~50 stations de travail, 2 serveurs VMware ESXi, multiple
                machine virtuelle)
              </p>
              <p>
                - Le déploiement et la maintenance du serveur pour la mission
                RGPD du cdg57
              </p>
            </div>
          </section>
          {/* <section className="mb-6">
          <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
            Description:
          </div>
          <div className="w-full lg:inline-block lg:w-8/12"></div>
        </section> */}
          <section className="mb-6">
            <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
              Outils:
            </div>
            <div className="w-full lg:inline-block lg:w-8/12">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="rounded-xl bg-gray-300 px-3">WAPT</span>
                    </td>
                    <td>
                      <span className="rounded-xl bg-gray-300 px-3">Veeam</span>
                    </td>
                    <td>
                      <span className="rounded-xl bg-gray-300 px-3">GLPI</span>
                    </td>
                    <td>
                      <span className="rounded-xl bg-gray-300 px-3">WSUS</span>
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

        <div>
          <h3 className="sm:text border-l-8 border-black pl-2 font-bold uppercase tracking-widest">
            CENTRE DE GESTION DE LA FONCTION PUBLIQUE TERRITORIALE DE LA MOSELLE
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
                Mise en disponibilité aux Malvoyants des documents nécessaires
                dans les collectivités du département
              </p>
              <p>
                Migration d'un service internet interne d'un serveur physique en
                virtualisation (VMware ESXi)
              </p>
              <p>Diverses tâches de maintenance et organisationnelles</p>
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
              <span className="rounded-xl bg-gray-300 px-3">VMware ESXi</span>
              <span className="rounded-xl bg-gray-300 px-3">
                Adobe Acrobat DC
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeExperiancesV1;
