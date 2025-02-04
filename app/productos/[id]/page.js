"use client";

import { useEffect, useState } from "react";
import { db } from "../../context/configFirebase"; // Conexión a Firebase
import { doc, getDoc } from "firebase/firestore";
import ProductoDetalle from "../../components/productoDetalle/productoDetalle";

export default function ProductoPage({ params }) {
  const [producto, setProducto] = useState(null);
  const { id } = params;

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoDoc = doc(db, "products", id);
        const productoSnap = await getDoc(productoDoc);

        if (productoSnap.exists()) {
          setProducto({ id: productoSnap.id, ...productoSnap.data() });
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) {
    return <div className="text-center mt-10 text-red-500">Producto no encontrado</div>;
  }

  return <ProductoDetalle producto={producto} />;
}
