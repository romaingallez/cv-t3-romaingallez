import { Turnstile } from '@marsidev/react-turnstile';
import  type { TurnstileProps } from '@marsidev/react-turnstile';
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
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""} 
    />
  );
});

export default CloudFlareCaptcha;
