"use client";

import { useState } from "react";
import { auth, googleProvider, createUserWithEmailAndPassword, signInWithPopup } from "../context/configFirebase"; // Ajusta la ruta según tu configuración
import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head"; // Importar Head para manejar el título y la descripción

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Campo para confirmar la contraseña
  const [showPassword, setShowPassword] = useState(false); // Control para mostrar/ocultar contraseña
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirigir al inicio después del registro
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/"); // Redirigir al inicio después de iniciar sesión con Google
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Ecommerce | Registro</title>
        <meta name="description" content="Crea una cuenta para comenzar a comprar" />
        <meta name="keywords" content="registro, ecommerce, tienda, online" />
      </Head>

      <div className="flex justify-center items-center min-h-screen bg-[#f9f4e7]">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#4f3018] text-center mb-6">Crea una cuenta</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#4f3018]" htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f3018] text-[#4f3018]" // Cambiado aquí
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-[#4f3018]" htmlFor="password">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Mostrar/ocultar la contraseña
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f3018] text-[#4f3018]" // Cambiado aquí
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#4f3018]"
                >
                  {showPassword ? "Ocultar" : "Ver"}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#4f3018]" htmlFor="confirmPassword">Confirmar Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Mostrar/ocultar la confirmación de contraseña
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f3018] text-[#4f3018]" // Cambiado aquí
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4f3018] text-white py-2 rounded-md hover:bg-[#6f4e37] transition-colors"
            >
              Registrar
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={handleGoogleRegister}
              className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600 transition-colors"
            >
              Registrarse con Google
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-[#4f3018] font-semibold hover:text-gray-600">
                Inicia sesión aquí
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => router.push("/")}
              className="text-[#4f3018] hover:text-gray-600 transition-colors"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
