// Write an endpoint that accepts a POST reqsuest and sends an email using nodemailer .
// The endpoint should accept the following parameters:
// - to: the email address to send the email to
// - from: the email address to send the email from
// - subject: the subject of the email
// - body: the body of the email
// The endpoint should return a 200 status code if the email was sent successfully, and a 500 status code if there was an error.

import { NextApiRequest, NextApiResponse } from 'next';
import { ReactEmailTemplate } from "../../../components/ReactEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { to, from, name, subject, body } = req.body;

  // Validate the required parameters
  if (!to || !from || !subject || !body) {
    res.status(400).json({ error: 'Missing parameters' });
    return;
  }

  try {

    const data = await resend.emails.send({
      from: "Romain GALLEZ <contact@romaingallez.fr>",
      to: ["romain.gallez@gmail.com"],
      subject: subject,
      react : ReactEmailTemplate({ name: name, to: to, subject: subject, body: body }),
    //   react: EmailTemplate({ firstName: "Romain" }),

    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }


  //   // Send the email
  //   await transporter.sendMail({
  //     from,
  //     to,
  //     subject,
  //     text: body,
  //   });

  //   res.status(200).json({ message: 'Email sent successfully' });
  // } catch (error) {
  //   console.error('Error sending email:', error);
  //   res.status(500).json({ error: 'Failed to send email' });
  // }
};

export default sendEmail;
