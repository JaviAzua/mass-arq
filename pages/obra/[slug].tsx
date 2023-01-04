import Head from "next/head";
import { client, urlFor } from "../../utils/client";
import { ObrasType } from "../../types";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export interface Props {
  obras: ObrasType[];
  obra: ObrasType;
}

export default function ObraInfo({ obra }: Props) {
  const [imgSelect, setImgSelect] = useState(0);
  const [modal, setModal] = useState(false);

  const description = obra.description;

  const src = urlFor(obra.image && obra?.image[imgSelect])?.url();

  const handleBack = () => {
    history.back();
  };

  return (
    <div>
      <Head>
        <title>MASS · {obra.name}</title>
        <meta
          name="description"
          content="MASS estudio de Arquitectura, Argentina, Rio Negro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className="w-full flex justify-center py-2 bg-white fixed z-10">
          <Link href={"/"}>
            <Image
              className="cursor-pointer"
              src={"/MassLogo.svg"}
              width={200}
              height={250}
              alt=""
            />
          </Link>
        </div>
      </nav>

      <main className="min-h-[80vh] w-[90vw] mx-auto pt-28">
        <div className="relative flex items-center justify-center">
          <Link href={"/#center_back"}>
            <IoArrowBackCircleOutline className="cursor-pointer w-10 h-10 -translate-x-40 " />
          </Link>
          <h1 className="font-bold text-3xl py-2">{obra.name}</h1>
        </div>
        <p className="py-20 text-center">{description}</p>
        <div className="pt-32">
          <div className="relative h-[80vh] w-[90vw] md:w-[70vw] mx-auto duration-700">
            <Image
              onClick={() => setModal(!modal)}
              src={src && src}
              alt=""
              fill
              className="object-cover cursor-pointer"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center z-[1] py-6 justify-center gap-10">
            {obra.image.map((img, i) => (
              <div key={i} className="w-[250px] h-[150px] relative">
                <Image
                  className="cursor-pointer object-cover"
                  onMouseEnter={() => setImgSelect(i)}
                  alt=""
                  src={urlFor(img).url()}
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == "obras"] {
      slug {
        current
      }
    }`;

  const obras = await client.fetch(query);

  const paths = obras.map((obra: ObrasType) => ({
    params: {
      slug: obra.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "obras" && slug.current == '${slug}'][0]`;
  const obra = await client.fetch(query);

  return {
    props: {
      obra,
    },
  };
};
