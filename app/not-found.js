// app/404.js
"use client";

import Navbar from "./components/layouts/navbar/navbar"; // Asegúrate de usar las rutas correctas
import Footer from "./components/layouts/footer/footer";

export default function Custom404() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 text-[#4f3018]">Error 404</h1>
        <p className="text-xl text-gray-600 mb-4">Ups, ocurrió un problema.</p>
        <p className="text-lg text-gray-400 mb-8">La página que estás buscando no se encuentra.</p>
        <p className="text-sm text-gray-500">By Phina</p>
        <button
        onClick={() => window.location.href = '/'}
        className="mt-4 bg-[#4f3018] text-white px-6 py-3 rounded-md hover:bg-[#6d4e37] transition-colors"
        > 
        Volver a la página principal
        </button>

      </main>
      
      <Footer />
    </>
  );
}
