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


import { Turnstile } from '@marsidev/react-turnstile'
import type { TurnstileInstance } from '@marsidev/react-turnstile'
// import { forwardRef, useState } from "react";
import { useRef } from "react";

export default function CloudFlareCaptcha() {

  const ref = useRef<TurnstileInstance>(null)

  return (
  
  <>
  <Turnstile 
    ref={ref} 
    siteKey={process.env.TURNSTILE_SITE_KEY ?? ""} 
  />
  </>
  )

}
