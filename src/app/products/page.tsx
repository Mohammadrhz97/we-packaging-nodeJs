"use client";
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
    <div className="max-w-[1024px] pt-16 mx-auto">
      <ProductListClient />
    </div>
  );
}
