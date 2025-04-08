// app/products/page.tsx (SERVER COMPONENT)
import { ServiceData } from "@/constant/constants.index";
import ProductListClient from "./ProductListClient";

export async function generateMetadata() {
  const titles = ServiceData.map((item) => item.title).join(" | ");
  return {
    title: "محصولات",
    description: `لیست محصولات: ${titles}`,
  };
}

export default function ProductsPage() {
  return (
    <div className="max-w-[1024px] pt-36 mx-auto">
      {/* Your static content here */}
      <ProductListClient />
    </div>
  );
}
