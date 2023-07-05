import Head from 'next/head';
import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import type { TurnstileInstance } from '@marsidev/react-turnstile';
import CloudFlareCaptcha  from 'src/components/CloudFlareCaptcha';
import MetaTags from 'src/components/MetaTags';

export default function Contact() {
  // Form field states
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  // Form status states
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Captcha states
  const captcha = useRef<TurnstileInstance | null>(null);
  const [captchaSuccess, setCaptchaSuccess] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  // // Field change handlers
  // const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  // const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  // const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value);

  // Form submission handler
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  
    // Check captcha
    if (!captcha || !captchaSuccess) {
      setError('Please complete the captcha challenge.');
      return;
    }
  
    // Begin sending
    beginSending();
  
    // Send the email
    sendEmail().then(() => {
      // Clear form on success
      clearForm();
    }).catch(() => {
      // Show error on failure
      setError('Failed to send email. Please try again later.');
    }).finally(() => {
      // End sending
      endSending();
    });
  };
  

  const beginSending = () => {
    setIsSending(true);
    setError('');
  };

  const endSending = () => {
    setIsSending(false);
  };

  const sendEmail = async () => {
    await axios.post('/api/email', {
      to: 'romain@romaingallez.fr',
      from: email,
      subject: 'Contact Form Submission',
      captchaToken: token,
      body: message,
      name: name,
    });
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSent(true);
  };

  return (
    <>
      <MetaTags 
        title="Contacter Romain" 
        description="Vous pouvez me contacter par mail ou via le formulaire de contact." 
        image="https://cv.romaingallez.fr/resume.png" 
        url="https://cv.romaingallez.fr" 
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        id="wrapper"
        className="flex-row flex-wrap shadow-2xl sm:m-12 sm:flex-nowrap"
      >
        <div className="flex w-full flex-col p-4">
          <p>
          Salut !
          <br />
          Je suis ravi de savoir que vous souhaitez me contacter. N'hésitez pas à remplir le formulaire ci-dessous pour me transmettre vos coordonnées et votre message.
          <br />
          Je suis impatient de vous lire !
          <br />
          Romain
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

            <div className="mb-4">
              <CloudFlareCaptcha
                ref={captcha}
                onSuccess={(token: string) => {
                  setToken(token);     
                  setCaptchaSuccess(true)
                }}              
              />
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
