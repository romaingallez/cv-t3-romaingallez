import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "@fontsource/questrial";
import { useSearchParams } from "next/navigation";
import MetaTags from "src/components/MetaTags";
import CustomFooter from "src/components/CustomFooter";
import ResumeIntroAlternances from "src/components/resume/intro/ResumeIntroAlternances";
import ResumeIntroPlusTrois from "src/components/resume/intro/ResumeIntroPlusTrois";
import ResumeProjets from "src/components/resume/projets/ResumeProjets";
import ResumeSidebar from "src/components/resume/sidebar/ResumeSidebar";
import ReusomeExperiancesV2 from "src/components/resume/experiances/ResumeExperiancesV2";

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

  let printStyles;
  const print = searchParams.get("print");

  if (print) {
    printStyles = "font-questrial print:font-questrial print:print-styles";
  } else {
    printStyles =
      "font-questrial container mx-auto w-full max-w-screen-xl px-4 sm:px-0";
  }

  let showThisSite = false;
  const thisSite = searchParams.get("directlink");

  if (thisSite) {
    showThisSite = true;
  } else {
    showThisSite = false;
  }

  let showMewo = false;
  const mewo = searchParams.get("mewo");

  if (mewo) {
    console.log("mewo");
    showMewo = true;
  } else {
    showMewo = false;
  }

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
      <div className={printStyles}>
        {/* {printMode && (
         <div className="font-questrial mx-auto w-full max-w-screen-xl px-4 sm:px-0 ">
     )} */}

        <main
          id="wrapper"
          className="flex-row flex-col-reverse flex-wrap shadow-2xl sm:m-6 sm:flex-row"
        >
          <div className="w-full md:flex">
            {/* Sidebar */}
            <ResumeSidebar
              showMewo={showMewo ?? undefined}
              showEmail={showEmail ?? undefined}
              email={email ?? undefined}
              showPhone={showPhone}
              phone={phone ?? undefined}
              phoneSpaced={phoneSpaced ?? undefined}
              age={age ?? undefined}
              showThisSite={showThisSite ?? undefined}
            />
            {/* Main content area */}
            <div className="w-full bg-white p-8 sm:w-3/4">
              {showMewo ? <ResumeIntroAlternances /> : <ResumeIntroPlusTrois />}
              <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10 dark:bg-gray-700" />
              <ResumeProjets />

              <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10 dark:bg-gray-700" />
              <ReusomeExperiancesV2 />
              <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10 dark:bg-gray-700" />
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
                    <span className="text-gray-700">
                      {" "}
                      Université de Lorraine
                    </span>
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
