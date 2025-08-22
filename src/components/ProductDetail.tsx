"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/types/Product";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-4xl">
        <button
          onClick={() => router.push("/")}
          className="mb-6 text-green-600 cursor-pointer hover:text-green-800 font-semibold transition-colors duration-200"
        >
          &larr; Voltar para a lista
        </button>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden md:flex">
          <div className="md:w-1/2 p-8 flex justify-center items-center bg-gray-100">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 object-contain"
            />
          </div>

          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full self-start mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-6 text-base">
              {product.description}
            </p>
            <div className="text-4xl font-extrabold text-green-600">
              ${product.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
