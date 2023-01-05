import Image from "next/image";
import { ObrasType } from "../types";
import { urlFor } from "../utils/client";
import Link from "next/link";

export interface Props {
  obras: ObrasType[];
}

export default function Gallery({ obras }: Props) {
  const images = obras.map((o) => o.image);

  const firstImage = images.map((o) => o[0]);

  const obra_1 = obras[0];
  const obra_2 = obras[1];
  const obra_3 = obras[2];
  const obra_4 = obras[3];
  const obra_5 = obras[4];
  const obra_6 = obras[5];

  const src = urlFor(firstImage && firstImage[0]).url();
  const src_2 = urlFor(firstImage && firstImage[1]).url();
  const src_3 = urlFor(firstImage && firstImage[2]).url();
  const src_4 = urlFor(firstImage && firstImage[3]).url();
  const src_5 = urlFor(firstImage && firstImage[4]).url();
  const src_6 = urlFor(firstImage && firstImage[5]).url();

  return (
    <div className="md:h-[100vh] w-[80vw] mx-auto py-4 md:flex md:justify-center md:items-center">
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-4 lg:gap-4 ">
        <div className="grid_item col-span-2">
          <Link href={`obra/${obra_1.slug.current}`}>
            <Image src={src} alt="" fill className=" object-cover" />
          </Link>
        </div>

        <div className="grid_item row-span-2">
          <Link href={`obra/${obra_2.slug.current}`}>
            <Image src={src_2} alt="" fill className="object-cover" />
          </Link>
        </div>
        <div className="grid_item ">
          <Link href={`obra/${obra_3.slug.current}`}>
            <Image src={src_3} alt="" fill className=" object-cover" />
          </Link>
        </div>
        <div className="grid_item ">
          <Link href={`obra/${obra_4.slug.current}`}>
            <Image src={src_4} alt="" fill className=" object-cover" />
          </Link>
        </div>
        <div className="grid_item ">
          <Link href={`obra/${obra_5.slug.current}`}>
            <Image src={src_5} alt="" fill className=" object-cover" />
          </Link>
        </div>
        <div className="grid_item col-span-2">
          <Link href={`obra/${obra_6.slug.current}`}>
            <Image src={src_6} alt="" fill className=" object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
}
