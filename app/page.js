import Navbar from "./components/layouts/navbar/navbar.js";
import Footer from "./components/layouts/footer/footer.js";

export const metadata = {
  title: "Ecommerce | Phina",
  description: "Ecommerce para empresa Phina, ropa interior y demas",
  keywords: ["ecommerce", "phina", "ropa interior", "pijama", "Aesthetic"],
  openGraphs: {
    title: "Ecommerce | Phina",
    description: "Ecommerce para empresa Phina, ropa interior y demas",
    url: "https://ecommerce-nextjs.vercel.app/",
    images: [
      {
        url: "/",
        width: 800,
        height: 600,
        alt: "Logo de Phina",
      },
    ],
  }
};

/*
export async function generateMetadata({params, searchParams}, parent) {
  const {id} = params
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res)=> res.json()) //Cuando AVANCEMOS USAMOS FIREBASE
  const parentMetadata = await parent;
  return {
  title: `Ecommerce | ${product.title}`,
  description: product.description,
  openGraph: {
  title: `Ecommerce | ${product.title}`,
  description: product.description,
  url: `https://ecommerce-nextjs.vercel.app/product/${id}`,
  images: [
  {
  url: product.image,
  alt: product.title,
  title: product.title,
  width: 800,
  height: 600,
  },
  ],},
  ...parentMetadata,
}
*/

export default function Home() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
