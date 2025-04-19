import { ServiceData } from "@/constant/constants.index";
import ProductPageClient from "./ProductPageClient";

// Generates metadata (e.g., title and description) dynamically based on the product ID
export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  // Await the productId from the route params
  const { productId } = await params;

  // Find the corresponding product data from the ServiceData array
  const product = ServiceData.find((item) => item.id === productId);

  // Return the metadata object with title and description
  return {
    title: product?.title || "Product Not Found",
    description: product?.description?.title || "Product description",
  };
}

// The main page component for displaying a single product
export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  // Await the productId from the route params
  const { productId } = await params;

  // Render the client component, passing the productId as a prop
  return <ProductPageClient productId={productId} />;
}
