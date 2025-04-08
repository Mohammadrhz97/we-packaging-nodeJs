import { ServiceData } from "@/constant/constants.index";
import ProductPageClient from "./ProductPageClient";

// Function to generate metadata dynamically for the product page
export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}) {
  // Await the params before accessing the productId
  const { productId } = await params;

  // Search for the product based on the provided productId
  const product = ServiceData.find((item) => item.id === productId);

  // If the product is not found, return default metadata
  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product could not be found.",
    };
  }

  // Return metadata with the title and description of the found product
  return {
    title: product.title,
    description: product?.description?.title || "معرفی محصولات", // Use the description from the product data, or a default one
  };
}

// The main ProductPage component that accepts the productId from the params
export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  // Await the params before using productId
  const { productId } = await params;

  // Render the ProductPageClient component, passing the productId as a prop
  return <ProductPageClient productId={productId} />;
}
