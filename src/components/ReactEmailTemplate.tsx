import * as React from "react";
// import { Button } from '@react-email/button';
import { Tailwind } from '@react-email/tailwind';

interface ReactEmailTemplateProps {
  name: string;
  from: string;
  subject: string;
  body: string;

}

export function ReactEmailTemplate(props: ReactEmailTemplateProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#007291',
            },
          },
        },
      }}
    >
      <div className="bg-gray-100">
        <p>Message de :  {props.name} avec l'email {props.from},</p>
        <p>Sujet : {props.subject}</p>
        <p>Contenu du message :</p>
        <p>{props.body}</p>
      </div>
    </Tailwind>
  );
}

export default ReactEmailTemplate;
