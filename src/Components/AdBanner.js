// GoogleAdSense.js
import React, { useEffect } from "react";

const GoogleAdSense = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", overflow: "hidden" }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
      data-ad-slot="1052895740"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAdSense;


