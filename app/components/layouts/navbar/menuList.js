import Link from "next/link";

const MenuList = () => {
  return (
    <div>
      <nav className="mt-4 space-x-4 flex justify-center ">
        <Link href="/" className="block text-lg text-[#4f3018] hover:text-gray-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="block text-lg text-[#4f3018] hover:text-gray-600 transition-colors">
          About
        </Link>
        <Link href="/contacto" className="block text-lg text-[#4f3018] hover:text-gray-600 transition-colors">
          Contact
        </Link>
        <Link href="/productos" className="block text-lg  text-[#4f3018] hover:text-gray-600 transition-colors">
          Productos
        </Link>
      </nav>
    </div>
  );
};

export default MenuList;
