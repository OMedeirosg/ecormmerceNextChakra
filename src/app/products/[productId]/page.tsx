"use client";
import { PageLayout } from "@/components/pagelayout";
import { ProductDetails } from "@/components/product/productDetails";
import { images } from "@/components/shop/_data";
import { useParams } from "next/navigation";
import { products } from "@/components/shop/_data";

const ProductPage = () => {
  const params = useParams();
  const productId = params.productId;
  const product = products.find((product) => product.id == productId);
  return (
    <PageLayout>
      <ProductDetails product={product} />
    </PageLayout>
  );
};
export default ProductPage;
