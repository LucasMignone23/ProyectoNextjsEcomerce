// lib/firestoreService.js
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getProducts = async () => {
  const productsCollection = collection(db, "productos"); // Asegúrate de que el nombre de la colección coincida
  const productsSnapshot = await getDocs(productsCollection);
  const productsList = productsSnapshot.docs.map(doc => doc.data());
  return productsList;
};
