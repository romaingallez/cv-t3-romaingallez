import Head from 'next/head';
import Image from 'next/image';
import "@fontsource/questrial";
import { useState, useRef } from 'react';
import axios from 'axios';
import type { TurnstileInstance } from '@marsidev/react-turnstile';
import CloudFlareCaptcha from 'src/components/CloudFlareCaptcha';
import MetaTags from 'src/components/MetaTags';
import CustomFooter from 'src/components/CustomFooter';

export default function Contact() {
  // Form field states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Form status and Captcha states
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const captcha = useRef<TurnstileInstance | null>(null);
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  // Form submission handler
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!captcha || !captchaSuccess) {
      setError('Please complete the captcha challenge.');
      return;
    }
    setIsSending(true);
    setError('');

    try {
      await axios.post('/api/contacts', {
        to: 'romain@romaingallez.fr',
        from: email,
        subject: 'Contact Form Submission',
        captchaToken: token,
        body: message,
        name: name,
      });
      setName('');
      setEmail('');
      setMessage('');
      setIsSent(true);
    } catch {
      setError('Failed to send email. Please try again later.');
    } finally {
      setIsSending(false);
    }
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
  
      <div className="font-questrial container mx-auto max-w-screen-xl w-full px-4 sm:px-0">
        <main
          id="wrapper"
          className="flex-row flex-wrap shadow-2xl sm:m-12 flex-col sm:flex-row"
        >
          <div className="w-full bg-white p-8">
            <div className="prose">
              <h2 className="border-l-8 border-green-500 pl-2 font-bold uppercase tracking-widest sm:text-xl mb-2">
                Contactez-moi
              </h2>
              <p>
                Salut ! Je suis ravi de savoir que vous souhaitez me contacter.
                N'hésitez pas à remplir le formulaire ci-dessous.
              </p>
              <form onSubmit={handleSubmit} className="mt-6">
                {/* Name Field */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-medium">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 shadow-md focus:shadow-lg transition duration-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
  
                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 shadow-md focus:shadow-lg transition duration-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
  
                {/* Message Field */}
                <div className="mb-4">
                  <label htmlFor="message" className="block text-lg font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 shadow-md focus:shadow-lg transition duration-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows={4}
                    required
                  />
                </div>
  
                {/* Captcha */}
                <div className="mb-6">
                  <CloudFlareCaptcha
                    ref={captcha}
                    onSuccess={(token: string) => {
                      setToken(token);
                      setCaptchaSuccess(true);
                    }}
                  />
                </div>
  
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {isSending ? 'Envoi en cours...' : 'Envoyer'}
                </button>
  
                {/* Status Messages */}
                {isSent && <p className="mt-2 text-green-600">Email envoyé avec succès !</p>}
                {error && <p className="mt-2 text-red-600">{error}</p>}
              </form>
            </div>
          </div>
        </main>
        <CustomFooter />
      </div>
    </>
  );
}
