import Image from "next/image";
import Menu from "./menu";

export const metadata = {
  title: "Ecommerce Logo",
  description: "Ecommerce Phinary Showroom",
  keywords: "Ecommerce, Phina, Ropa interior, Pijama, Aesthetic, Phinary",
};

const Navbar = () => {
  return (
    <>
      <header className="shadow-md bg-[#fbf9f6]">
        <nav className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Image
              src="/Phina_Logo.png"
              alt="Ecommerce-Practica"
              width={100}
              height={100}
              className="object-contain"
            />
            <Menu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
