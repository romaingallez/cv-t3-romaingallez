// import { Turnstile } from "@marsidev/react-turnstile";
// import type { TurnstileInstance, TurnstileProps } from "@marsidev/react-turnstile";
// import { forwardRef, useState } from "react";
// import { StrictOmit } from "ts-essentials";

// interface CloudFlareCaptchaProps extends StrictOmit<TurnstileProps, "siteKey"> {
//   // setCaptcha: (captcha: any | null) => void;
// }

// export const CloudFlareCaptcha = forwardRef<TurnstileInstance, CloudFlareCaptchaProps>(({ ...props }, ref) => {
//   const [token, setToken] = useState<string>();

//   return (
//     <Turnstile
//       ref={ref}
//       {...props}
//       siteKey={process.env.TURNSTILE_SITE_KEY ?? "DEFAULT_SITE_KEY"}
//       options={{
//         ...props.options,
//       }}
//     />
//   );
// });

// CloudFlareCaptcha.displayName = "CloudFlareCaptcha";


import { Turnstile, TurnstileProps } from '@marsidev/react-turnstile';
import type { TurnstileInstance } from '@marsidev/react-turnstile';
import { forwardRef } from "react";

type CloudFlareCaptchaProps = Omit<TurnstileProps, 'siteKey'>;

const CloudFlareCaptcha = forwardRef<TurnstileInstance, CloudFlareCaptchaProps>((props, ref) => {
  
  // Give your component a display name for debugging purposes
  CloudFlareCaptcha.displayName = 'CloudFlareCaptcha';

  return (
    <Turnstile 
      {...props}
      ref={ref} 
      siteKey={process.env.TURNSTILE_SITE_KEY ?? ""} 
    />
  );
});

export default CloudFlareCaptcha;
