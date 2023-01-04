import Head from "next/head";
import Navbar from "../components/Navbar";
import MassLogo from "../components/MassLogo";
import Gallery from "../components/Gallery";
import { client } from "../utils/client";
import { ObrasType } from "../types";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";

export interface Props {
  obras: ObrasType[];
}

export default function Home({ obras }: Props) {
  return (
    <div>
      <Head>
        <title>MASS · Arquitectura</title>
        <meta
          name="description"
          content="MASS estudio de Arquitectura, Argentina, Rio Negro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1 className="hidden">MASS Estudio de Arquitectura, Argentina</h1>
      <section id="hero">
        <MassLogo />
      </section>
      <section id="gallery">
        <h2 className="md:hidden text-center font-bold text-2xl">OBRAS</h2>
        <Gallery obras={obras} />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "obras"]';
  const obras = await client.fetch(query);

  return {
    props: {
      obras,
    },
  };
};
