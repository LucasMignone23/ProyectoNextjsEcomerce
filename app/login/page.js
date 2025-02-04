"use client";

import { useState } from "react";
import { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup } from "../context/configFirebase"; // Ajusta la ruta según tu configuración
import { useRouter } from "next/navigation"; // Para redirigir al inicio
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter(); // Para redirigir a la página de inicio

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirige al inicio después de iniciar sesión
    } catch (error) {
      setError("Correo o contraseña incorrectos");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/"); // Redirige al inicio después de iniciar sesión con Google
    } catch (error) {
      setError("Hubo un problema al iniciar sesión con Google");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f8f4e3]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-[#4f3018] mb-6">Iniciar sesión</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-[#4f3018]">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-[#4f3018] rounded-lg mt-2"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg text-[#4f3018]">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-[#4f3018] rounded-lg mt-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4f3018] text-white py-2 rounded-lg hover:bg-[#6b4f31] transition-colors"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Botón de Iniciar sesión con Google */}
        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-[#db4437] text-white py-2 rounded-lg hover:bg-[#c1351d] transition-colors"
          >
            Iniciar sesión con Google
          </button>
        </div>

        <div className="mt-4 text-center">
          <Link href="/register" className="text-[#4f3018] hover:text-gray-600">
            ¿No tienes cuenta? Regístrate aquí
          </Link>
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
  );
};

export default LoginPage;
