import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Define the types for the props
interface ResumeSidebarProps {
  showMewo: boolean;
  showEmail: boolean;
  email?: string; // Optional because there's a condition to check if it's available
  showPhone: boolean;
  phone?: string; // Optional because there's a condition to check if it's available
  phoneSpaced?: string; // This is presumably a formatted version of the phone number
  age: number;
  showThisSite: boolean;
}
const ResumeSidebar: React.FC<ResumeSidebarProps> = ({
  showMewo,
  showEmail,
  email,
  showPhone,
  phone,
  phoneSpaced,
  age,
  showThisSite,
}) => {
  return (
    <div
      id="sidebar"
      className="w-full bg-gradient-to-b from-indigo-300 via-green-300 to-white p-8 sm:w-1/4 sm:max-w-sm"
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
        <h3>Développeur Junior | DevOps</h3>
      </div>

      {showMewo && (
        <div className="mt-8">
          <Image
            src="/MewoLogo.png"
            alt="LogoMewo"
            className="mx-auto mb-2 w-48"
            width={200}
            height={200}
          />
        </div>
      )}
      {/*  */}
      <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10 dark:bg-gray-700" />
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
                <Link href={`mailto:${email}`}>{email}</Link>
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
                <Link href={`tel:${phone}`}>{phoneSpaced}</Link>
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
            <Link
              href="https://l.gallez.tech/s/github"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </Link>
          </div>
          <div className="my-3 flex items-center">
            <Image
              src="/logo-linkedin.svg"
              className="mr-4 inline w-6"
              alt="LinkedIn Logo"
              width={200}
              height={200}
            />
            <Link
              href="https://l.gallez.tech/s/linkedin"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </Link>
          </div>

          {showThisSite && (
            <div className="my-3 flex items-center">
              <Image
                src="/laptop-outline.svg"
                className="mr-4 inline w-6"
                alt="laptop icon"
                width={200}
                height={200}
              />
              <Link
                href="https://cv.romaingallez.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Version web
              </Link>
            </div>
          )}
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
      </div>
    </div>
  );
};

export default ResumeSidebar;
