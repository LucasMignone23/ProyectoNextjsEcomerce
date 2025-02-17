"use client";

import { useEffect, useState } from "react";
import { db } from "../context/configFirebase"; // Conexión a Firebase
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Navbar from "../components/layouts/navbar/navbar";
import Footer from "../components/layouts/footer/footer";
import Link from "next/link";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "products");
        const querySnapshot = await getDocs(productosRef);

        const allProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(allProducts);
        setFilterProducts(allProducts);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  }, []);

  const handleFilter = () => {
    if (selectedCategory) {
      setFilterProducts(productos.filter((producto) => producto.category === selectedCategory));
    } else {
      setFilterProducts(productos);
    }
  };

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#4f3018]">Productos</h1>
        <div className="flex justify-center mt-8 space-x-4">
          <select
            className="bg-white border border-[#4f3018]-500 text-[#4f3018] font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-50 transition duration-200"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            {Array.from(new Set(productos.map((producto) => producto.category))).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            onClick={handleFilter}
            className="bg-white border border-[#4f3018]-500 text-[#4f3018] font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-50 transition duration-200"
          >
            Filtrar
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {filterProducts.length > 0 ? (
            filterProducts.map(({ id, title, price, imageUrl }) => (
              <div key={id} className="products border border-gray-300 bg-[#e9d6c5] rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-200">
                <Image
                  className="img_card w-full h-64 object-cover rounded-md"
                  src={imageUrl}
                  alt={title}
                  width={215}
                  height={300}
                  quality={100}
                />
                <p className="titulo text-xl font-semibold text-gray-800 mt-4">{title}</p>
                <p className="precio text-lg font-bold text-gray-800">${price}</p>
                <button className="button-card mt-4 bg-[#fbf9f6] text-[#4f3018] font-bold py-2 px-4 rounded shadow-md hover:bg-white-600 transition duration-200">
                  <Link href={`/productos/${id}`}>Ver más</Link>
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No se encontraron productos.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
