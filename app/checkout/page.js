"use client";

import { useCart } from "../context/cartContext";
import Navbar from "../components/layouts/navbar/navbar";
import Footer from "../components/layouts/footer/footer";
import { useRouter } from "next/navigation";
import { db } from "../context/configFirebase"; // Importa la instancia de Firestore
import { doc, updateDoc, increment } from "firebase/firestore"; // Funciones de Firestore

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  // Función para actualizar el stock en Firebase
  const updateStock = async () => {
    try {
      for (const producto of cart) {
        const productRef = doc(db, "products", producto.id.toString()); // Refiere al producto en Firebase
        await updateDoc(productRef, {
          stock: increment(-1), // Reduce el stock en 1
        });
      }
    } catch (error) {
      console.error("Error actualizando el stock: ", error);
    }
  };

  // Función para simular el pago y actualizar el stock
  const handlePayment = async () => {
    await updateStock(); // Actualizar el stock en Firebase
    alert("Simulación de pago con Mercado Pago exitosa 🎉");
    clearCart(); // Vacía el carrito después de "pagar"
    router.push("/productos"); // Redirige a la página de productos
  };

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto text-[#4f3018]">
        <h1 className="text-4xl font-bold mb-6 text-center">Checkout</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">No hay productos en el carrito.</p>
        ) : (
          <div className="bg-[#e9d6c5] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Resumen de compra</h2>
            {cart.map((producto, index) => (
              <div key={index} className="flex justify-between items-center mb-4 border-b pb-2">
                <p className="text-[#4f3018]">{producto.title}</p>
                <p className="text-[#4f3018]">${producto.price}</p>
              </div>
            ))}
            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-[#4f3018] text-white px-6 py-3 rounded-md hover:bg-[#6d4e37] transition-colors"
            >
              Pagar con Mercado Pago (Simulado)
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
