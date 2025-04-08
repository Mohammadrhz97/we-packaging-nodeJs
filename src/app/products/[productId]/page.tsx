import { ServiceData } from "@/constant/constants.index";
import ProductPageClient from "./ProductPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = ServiceData.find((item) => item.id === productId);

  return {
    title: product?.title || "Product Not Found",
    description: product?.description?.title || "Product description",
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return <ProductPageClient productId={productId} />;
}
