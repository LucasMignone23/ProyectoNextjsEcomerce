/* eslint-disable @next/next/no-img-element */
"use client";

import { useCart } from "../context/cartContext";
import Navbar from "../components/layouts/navbar/navbar";
import Footer from "../components/layouts/footer/footer";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Importamos el router para la navegación

export default function Carrito() {
  const { cart, removeFromCart, clearCart } = useCart(); // Obtener los productos del carrito, eliminar productos y vaciar el carrito
  const router = useRouter(); // Crear la instancia del router

  // Función para ir a la página de productos
  const handleBackToProducts = () => {
    router.push("/productos"); // Redirige a la página de productos
  };

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#4f3018]">Carrito de Compras</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <div>
            {cart.map((producto, index) => (
              <div key={index} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={producto.imageUrl}
                    alt={producto.title}
                    className="w-20 h-20 max-w-[200px] max-h-[200px] object-cover rounded-lg"
                  />
                  <p className="ml-4 text-gray-600">{producto.title}</p>
                  <p className="ml-4 text-gray-600">$ {producto.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(producto.id)} // Elimina el producto del carrito
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Botones para vaciar el carrito y volver a productos */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={clearCart} // Vacía el carrito
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Vaciar carrito
          </button>

          <button
            onClick={handleBackToProducts} // Vuelve a la página de productos
            className="bg-[#4f3018] text-white px-6 py-3 rounded-md hover:bg-[#6d4e37] transition-colors"
          >
            Volver a productos
          </button>

          <button
            onClick={() => router.push("/checkout")}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Finalizar compra
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
