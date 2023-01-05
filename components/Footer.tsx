import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex items-center justify-between bg-slate-200 py-2">
      <div>
        <Image
          className="cursor-pointer opacity-20"
          src={"/MassLogo.svg"}
          width={100}
          height={250}
          alt=""
        />
        <Image
          className="cursor-pointer opacity-20"
          src={"/MassText.svg"}
          width={200}
          height={250}
          alt=""
        />
      </div>
      <div>
        <p className="text-xs">Sitio web creado por Javier Azua - 2023</p>
      </div>
    </div>
  );
}
