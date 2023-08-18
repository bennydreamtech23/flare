import dynamic from "next/dynamic";

// Dynamically import the AdSense component and disable SSR
const DynamicAdSense = dynamic(() => import("./AdBanner"), {
  ssr: false,
});

export default DynamicAdSense;
