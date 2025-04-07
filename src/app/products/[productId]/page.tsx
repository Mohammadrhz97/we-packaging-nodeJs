import { ServiceData } from "@/constant/constants.index";
import ProductPageClient from "./ProductPageClient";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}) {
  const product = ServiceData.find((item) => item.id === params.productId);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product could not be found.",
    };
  }

  return {
    title: product.title,
    description: product?.description?.title || "Product detail page",
  };
}

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return <ProductPageClient productId={params.productId} />;
}
