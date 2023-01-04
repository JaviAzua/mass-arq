import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex items-center justify-between bg-slate-200">
      <Image
        className="cursor-pointer"
        src={"/MassLogo.svg"}
        width={100}
        height={250}
        alt=""
      />
      <div>
        <p className="text-xs">Sitio web creado por Javier Azua - 2023</p>
      </div>
    </div>
  );
}
