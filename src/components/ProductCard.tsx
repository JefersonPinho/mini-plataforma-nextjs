import { Product } from "@/types/Product";
import Link from "next/link";

type ProductCardProps = {
  products: Product[];
};

export const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  return (
    <div className="bg-gray-50 px-5 py-5 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full self-start mb-3 uppercase">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-gray-800 line-clamp-2">
                    {product.title}
                  </h3>
                </div>

                <div className="mt-4">
                  <p className="text-2xl font-extrabold text-green-600">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="w-full bg-slate-800 text-white text-center font-semibold rounded-md py-2 transition-colors duration-300 group-hover:bg-green-800">
                  Ver Detalhes
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
