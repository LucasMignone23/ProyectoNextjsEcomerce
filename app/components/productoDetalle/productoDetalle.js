"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore"; // Importar Firestore
import { db } from "../../context/configFirebase"; // Importar la instancia de Firestore
import Navbar from "../layouts/navbar/navbar";
import Footer from "../layouts/footer/footer";
import Image from "next/image";
import { useCart } from "../../context/cartContext"; 
import { useParams } from "next/navigation"; // Obtener parámetros de la URL

export default function ProductoDetalle() {
  const { addToCart } = useCart();
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      if (id) {
        try {
          const productoRef = doc(db, "products", id);
          const productoSnap = await getDoc(productoRef);

          if (productoSnap.exists()) {
            setProducto({ id: productoSnap.id, ...productoSnap.data() });
          } else {
            console.log("Producto no encontrado");
          }
        } catch (error) {
          console.error("Error obteniendo el producto:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10 text-blue-500">Cargando...</div>;
  }

  if (!producto) {
    return <div className="text-center mt-10 text-red-500">Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    addToCart(producto);
  };

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#4f3018]">{producto.title}</h1>
        <div className="flex flex-col md:flex-row items-center justify-center border border-gray-300 bg-[#e9d6c5] rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-200">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              className="rounded-lg object-cover w-[400px] h-[400px] max-w-full"
              src={producto.imageUrl}
              alt={producto.title}
              width={400}
              height={400}
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 flex flex-col items-center text-center md:text-left">
            <p className="text-xl font-bold text-gray-800">Precio: ${producto.price}</p>
            <p className="text-gray-600 mt-4">{producto.description}</p>
            <button
              onClick={handleAddToCart}
              className="mt-4 bg-[#4f3018] text-white px-6 py-3 rounded-md hover:bg-[#6d4e37] transition-colors"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
