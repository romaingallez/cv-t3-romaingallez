import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { init } from "@socialgouv/matomo-next";
import React, { useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';




const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL || "https://matomo.romaingallez.fr";
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || "6";


const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  // return <Component {...pageProps} />;
  return (
    <>
    <Component {...pageProps} />
    <Analytics />
    <SpeedInsights />
    </>
  );
}

export default api.withTRPC(MyApp);

