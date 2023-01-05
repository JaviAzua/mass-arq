import Image from "next/image";
import Link from "next/link";
import * as Scroll from "react-scroll";

let LinkS = Scroll.Link;

export default function Navbar() {
  return (
    <div className="fixed z-30">
      <nav className="w-[100vw] flex bg-white justify-around items-center py-2">
        <div className="w-full flex justify-center md:block md:w-auto">
          <Link href={"/"}>
            <Image
              className="cursor-pointer"
              src={"/MassLogo.svg"}
              width={200}
              height={250}
              alt=""
            />
            <Image
              className="cursor-pointer"
              src={"/MassText.svg"}
              width={200}
              height={200}
              alt=""
            />
          </Link>
        </div>
        <div className="md:min-w-[50vw]">
          <ul className="hidden md:flex justify-evenly">
            <LinkS to="hero" spy={true} smooth={true} duration={300}>
              <li className="listItem">INICIO</li>
            </LinkS>
            <LinkS
              to="gallery"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
            >
              <li className="listItem">OBRAS</li>
            </LinkS>

            <LinkS to="contact" spy={true} smooth={true} duration={300}>
              <li className="listItem">CONTACTO</li>
            </LinkS>
          </ul>
        </div>
      </nav>
    </div>
  );
}
