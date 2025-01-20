import { productos } from "../../mock/productos"; // Datos mock
import Image from "next/image";
import ButtonBack from "../../components/common/button/buttonBack";
import Navbar from "@/app/components/layouts/navbar/navbar";
import Footer from "@/app/components/layouts/footer/footer";

export const metadata = {
    title: "Ecommerce | Home",
    description: "Ecommerce con los productos de la categoria camisa, pantalon, chaqueta, sudadera, camiseta, zapato, etc.",
    keywords: "Ecommerce, ropa, Zara, moda, tienda, online, shopping, tienda de ropa, camisa, pantalon, chaqueta, sudadera, camiseta, zapato, etc.",
};

// Usar async/await correctamente para obtener los parámetros
export default async function CategoryPage({ params }) {
    const { category } = await params; 

    // Filtrar los productos por la categoría
    const filteredProducts = productos.filter(producto => producto.category === category);

    return (
        <>
        <Navbar/>   
        <div className="p-6 max-w-7xl mx-auto  ">
            <h1 className="text-3xl font-bold mb-4 text-center text-[#4f3018]">{category}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 " >
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(producto => (
                        <div key={producto.id} className="border rounded-lg p-4 shadow-md bg-[#e9d6c5]">
                            <Image className="img_card w-full h-64 object-cover rounded-md" src={producto.imageUrl} alt={producto.title} width={215} height={300}  />
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
