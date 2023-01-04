import Navbar from "./Navbar";

export interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>SOY EL FOOTER</footer>
    </>
  );
}
