import Image from "next/image";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="fixed z-30">
      <nav className="w-[100vw] flex bg-white justify-around items-center py-2">
        <div className="w-full flex justify-center md:block md:w-auto">
          <Link to="hero" spy={true} smooth={true} duration={500} delay={300}>
            <Image
              className="cursor-pointer"
              src={"/MassLogo.svg"}
              width={200}
              height={250}
              alt=""
            />
          </Link>
        </div>
        <div className="md:min-w-[50vw]">
          <ul className="hidden md:flex justify-evenly">
            <Link to="hero" spy={true} smooth={true} duration={300}>
              <li className="listItem">INICIO</li>
            </Link>
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <li className="listItem">OBRAS</li>
            </Link>

            <Link to="contact" spy={true} smooth={true} duration={300}>
              <li className="listItem">CONTACTO</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
