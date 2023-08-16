import localFont from "next/font/local";
import "@/styles/global.scss";
import Layout from "../Components/Layout";
import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "700", "300", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const monument_extended = localFont({
  src: "../../public/fonts/MonumentExtended-Ultrabold.otf",
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={ibmPlexSans.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
