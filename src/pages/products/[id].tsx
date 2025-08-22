import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Product } from "@/types/Product";
import ProductDetail from "@/components/ProductDetail";

export default function ProductDetailPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <ProductDetail product={product} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { id: string } }[] = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`Falha ao buscar dados, status: ${res.status}`);
    }

    const products: Product[] = await res.json();

    paths = products.map((product) => ({
      params: { id: String(product.id) },
    }));
  } catch (error) {
    console.error("Erro ao gerar os paths para os produtos:", error);
  }

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ product: Product }> = async ({
  params,
}) => {
  try {
    const id = params?.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
      throw new Error(`Falha ao buscar o produto ${id}, status: ${res.status}`);
    }

    const product: Product = await res.json();

    if (!product || !product.id) {
      return { notFound: true };
    }

    return {
      props: { product },
      revalidate: 60,
    };
  } catch (error) {
    console.error(`Erro ao buscar dados para o produto ${params?.id}:`, error);
    return {
      notFound: true,
    };
  }
};
