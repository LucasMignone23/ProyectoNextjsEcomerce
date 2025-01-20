"use client"

import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <footer className="bg-[#fbf9f6] text-[#4f3018] py-5">
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Image
            src={'/Phina_Logo.png'}// Asegúrate de colocar la imagen en `public/`
            alt="Logo Phina"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>

        {/* Redes */}
        <div className="flex items-center">
          <InstagramIcon />
          <a
            href="https://www.instagram.com/phinashowroom_/?igsh=NDN1eHgzbDF1cmg1"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:underline"
          >
            Phina Showroom
          </a>
        </div>

        {/* Ubicación */}
        <div className="mt-4 md:mt-0">Luján, BsAs. Argentina</div>
      </div>

      {/* Desarrollo */}
      <div className="flex justify-center items-center mt-6">
        <p className="text-gray-500 font-bold text-center">
          ©2024 Desarrollado por Lucas Mignone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
