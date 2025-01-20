"use client"
import { useRouter } from "next/navigation";

const ButtonBack = () => {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.back()} 
            className="button-card mt-4 bg-[#4f3018] text-[#fbf9f6] font-bold py-2 px-4 rounded shadow-md hover:bg-white-600 transition duration-200"
            aria-label="Regresar"
        >
            Regresar
        </button>
    );
};

export default ButtonBack;