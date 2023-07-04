import Head from "next/head";
import "@fontsource/questrial";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Disable the submit button and show loading state
    setIsSending(true);
    setError("");

    try {
      // Make a POST request to the email endpoint
      await axios.post("/api/email", {
        to: "romain@romaingallez.fr", // Replace with the recipient's email address
        from: email,
        subject: "Contact Form Submission",
        body: message,
        name: name,
      });

      console.log(name, body, message);

      // Clear the form and show success message
      setName("");
      setEmail("");
      setMessage("");
      setIsSent(true);
    } catch (error) {
      // Show error message
      setError("Failed to send email. Please try again later.");
    } finally {
      // Re-enable the submit button
      setIsSending(false);
    }
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="CV Romain GALLEZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        id="wrapper"
        className="flex-row flex-wrap shadow-2xl sm:m-12 sm:flex-nowrap"
      >
        <div className="flex w-full flex-col p-4">
          <p>
            Pour me joindre et obtenir plus d'informations, veuillez utiliser
            le formulaire ci-dessous.
          </p>
          <form
            className="mx-auto w-full max-w-md p-5"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-2 block text-lg text-gray-700"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block text-lg text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-2 block text-lg text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-6 py-3 text-lg text-white hover:bg-indigo-600"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Envoyer"}
              </button>
            </div>
            {isSent && (
              <p className="text-green-500 mt-2">Email sent successfully!</p>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </main>

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
