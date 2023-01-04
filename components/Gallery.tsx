import Image from "next/image";
import { ObrasType } from "../types";
import { urlFor } from "../utils/client";

export interface Props {
  obras: ObrasType[];
}

export default function Gallery({ obras }: Props) {
  const images = obras.map((o) => o.image);

  const firstImage = images.map((o) => o[0]);

  const src = urlFor(firstImage && firstImage[0]).url();
  const src_2 = urlFor(firstImage && firstImage[1]).url();
  const src_3 = urlFor(firstImage && firstImage[2]).url();
  const src_4 = urlFor(firstImage && firstImage[3]).url();
  const src_5 = urlFor(firstImage && firstImage[4]).url();
  const src_6 = urlFor(firstImage && firstImage[5]).url();

  return (
    <div className="md:min-h-[100vh] w-[80vw] mx-auto py-4 snap-center">
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4 lg:gap-7 ">
        <div className="grid_item col-span-2">
          <Image src={src_3} alt="" fill className=" object-cover" />
        </div>
        <div className="grid_item row-span-2">
          <Image src={src_2} alt="" fill className="object-cover" />
        </div>
        <div className="grid_item ">
          <Image src={src_5} alt="" fill className=" object-cover" />
        </div>
        <div className="grid_item ">
          <Image src={src_6} alt="" fill className=" object-cover" />
        </div>
        <div className="grid_item ">
          <Image src={src} alt="" fill className=" object-cover" />
        </div>
        <div className="grid_item col-span-2">
          <Image src={src_4} alt="" fill className=" object-cover" />
        </div>
      </div>
    </div>
  );
}
