"use client";

import ProductoDetalle from "../../components/productoDetalle/productoDetalle"; // Importamos el componente

export default function ProductoPage({ params }) {
  return <ProductoDetalle id={params.id} />;
}
