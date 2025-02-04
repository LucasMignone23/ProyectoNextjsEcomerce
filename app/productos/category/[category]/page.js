"use client";

import { useEffect, useState } from "react";
import { db } from "../../../context/configFirebase"; // Conexión a Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import Image from "next/image";
import ButtonBack from "../../../components/common/button/buttonBack";
import Navbar from "../../../components/layouts/navbar/navbar";
import Footer from "../../../components/layouts/footer/footer";

export const metadata = {
  title: "Ecommerce | Categorías",
  description: "Explora productos por categoría",
  keywords: "Ecommerce, ropa, categorías, tienda, online",
};

export default function CategoryPage({ params }) {
  const [productos, setProductos] = useState([]);
  const { category } = params;

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "products");
        const q = query(productosRef, where("category", "==", category));
        const querySnapshot = await getDocs(q);

        const productosFiltrados = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(productosFiltrados);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  }, [category]);

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#4f3018] capitalize">{category}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productos.length > 0 ? (
            productos.map((producto) => (
              <div key={producto.id} className="border rounded-lg p-4 shadow-md bg-[#e9d6c5]">
                <Image
                  className="img_card w-full h-64 object-cover rounded-md"
                  src={producto.imageUrl}
                  alt={producto.title}
                  width={215}
                  height={300}
                />
                <p className="titulo text-xl font-semibold text-gray-800 mt-4">{producto.title}</p>
                <p className="precio text-lg font-bold text-gray-800">${producto.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No se encontraron productos en esta categoría.</p>
          )}
        </div>
        <ButtonBack />
      </div>
      <Footer />
    </>
  );
}
