// Write an endpoint that accepts a POST reqsuest and sends an email using nodemailer .
// The endpoint should accept the following parameters:
// - to: the email address to send the email to
// - from: the email address to send the email from
// - subject: the subject of the email
// - body: the body of the email
// The endpoint should return a 200 status code if the email was sent successfully, and a 500 status code if there was an error.

import type { NextApiRequest, NextApiResponse } from 'next';
import { ReactEmailTemplate } from "src/components/ReactEmailTemplate";
import { Resend } from "resend";




const resend = new Resend(process.env.RESEND_API_KEY);


const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  

  const { to, from, name, subject, body, captchaToken } = req.body as {
    to: string;
    from: string;
    name: string;
    subject: string;
    body: string;
    captchaToken: string;
  };
  

  // Validate the required parameters
  if (!to || !from || !subject || !body || !captchaToken) {
    res.status(400).json({ error: 'Missing parameters' });
    return;
  }

  const form = new URLSearchParams();
  form.append('secret', process.env.TURNSTILE_SITE_KEY ?? "");
  form.append('response', captchaToken);
  form.append('remoteip', req.headers['x-forwarded-for'] as string); // Type assertion added
  const result = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    { method: 'POST', body: form }
  );
  
  if (!result.ok) {
    res.status(result.status).json({ error: 'Failed to verify captcha token' });
    return;
  }
  
  const json = await result.json() as object & { success: boolean };
  
  if (!json.success) {
    res.status(400).json({ error: 'Captcha token failed' });
    return;
  }
  
  
  try {

    console.log("req.body", req.body);

    const data = await resend.emails.send({
      from: "Romain GALLEZ <contact@romaingallez.fr>",
      to: ["romain.gallez@gmail.com"],
      subject: subject,
      react: ReactEmailTemplate({ name: name, subject: subject, body: body }),
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }

};

export default sendEmail;
