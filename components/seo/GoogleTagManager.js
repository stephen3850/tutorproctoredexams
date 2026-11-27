'use client';

import React from 'react';
import Script from 'next/script';

export default function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-N7MJ7GGG';

  return (
    <>
      <Script
        id="gtm-script-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
      />
      <Script
        id="gtm-datalayer-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
        }}
      />
    </>
  );
}
