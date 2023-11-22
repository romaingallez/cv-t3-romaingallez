// src/pages/api/contacts.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { ReactEmailTemplate } from "src/components/ReactEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? '');

interface EmailRequestBody {
  to: string;
  from: string;
  name: string;
  subject: string;
  body: string;
  captchaToken: string;
}


// Function to send a notification via Pushover
const sendPushoverNotification = async (message: string) => {
  const form = new FormData();
  form.append("token", process.env.PUSHOVER_TOKEN as string);
  form.append("user", process.env.PUSHOVER_USER as string);
  form.append("message", message);

  const options = {
    method: 'POST',
    body: form,
  };

  try {
    const response = await fetch('https://api.pushover.net/1/messages.json', options);

    // const data = await response.json();
    const data = await response.json() as object & {success: boolean};
    console.log('Pushover response:', data);
  } catch (err) {
    console.error('Error sending Pushover notification:', err);
  }
};

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { to, from, name, subject, body, captchaToken } = req.body as EmailRequestBody;


  // Validate the required parameters
  if (!to || !from || !subject || !body || !captchaToken) {
    res.status(400).json({ error: 'Missing parameters' });
    return;
  }

  // Captcha verification
  const form = new URLSearchParams();
  form.append('secret', process.env.TURNSTILE_SECRET_KEY ?? "");
  form.append('response', captchaToken);
  form.append('remoteip', req.headers['x-forwarded-for'] as string);

  const captchaResult = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    { method: 'POST', body: form }
  );

  if (!captchaResult.ok) {
    res.status(captchaResult.status).json({ error: 'Failed to verify captcha token' });
    return;
  }

  const captchaJson = await captchaResult.json() as { success: boolean };
  
  if (!captchaJson.success) {
    res.status(400).json({ error: 'Captcha token failed' });
    return;
  }

  // Sending email
  try {
    const emailResponse = await resend.emails.send({
      from: "Romain GALLEZ <contact@romaingallez.fr>",
      to: ["romain.gallez@gmail.com"],
      subject: subject,
      react: ReactEmailTemplate({ name: name, from: from, subject: subject, body: body }),
    });

    const pushoverMessage = `New message from ${name || 'Unknown'}: ${body || 'No content'}`;
    await sendPushoverNotification(pushoverMessage);
  
    
    res.status(200).json(emailResponse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
};

export default sendEmail;
