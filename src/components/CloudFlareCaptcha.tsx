import { Turnstile, TurnstileInstance, TurnstileProps, TurnstileResponse } from "@marsidev/react-turnstile";
import { forwardRef, useState } from "react";

interface CloudFlareCaptchaProps extends StrictOmit<TurnstileProps, "siteKey"> {
  setCaptcha: (captcha: TurnstileResponse | null) => void;
}



export const CloudFlareCaptcha = forwardRef<TurnstileInstance, CloudFlareCaptchaProps>(({setCaptcha, ...props}, ref) => {


  const [token, setToken] = useState<string>()

  
  
  
  return (
    <Turnstile
      ref={ref}
      {...props}
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
      options={{
        ...props.options,
      }}
    />
  );
});

CloudFlareCaptcha.displayName = "CloudFlareCaptcha";
