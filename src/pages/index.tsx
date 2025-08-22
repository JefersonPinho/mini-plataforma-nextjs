import { ProductCard } from "@/components/ProductCard";
import { GetStaticProps } from "next";
import { Product } from "@/types/Product";
import { useState } from "react";

type HomeProps = {
  products: Product[];
};

export default function Home({ products }: HomeProps) {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold text-center py-10 text-gray-800">
        Confira Nossos Produtos
      </h1>
      <ProductCard products={products} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let products: Product[] = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`Falha ao buscar dados, status: ${res.status}`);
    }

    products = await res.json();
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return {
      notFound: true,
    };
  }

  return {
    props: { products },
    revalidate: 60,
  };
};
