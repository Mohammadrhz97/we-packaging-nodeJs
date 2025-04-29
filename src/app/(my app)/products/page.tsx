import ProductListClient from "./ProductListClient";
import { Metadata } from "next";

// Define static metadata for the page (title and description)
export const metadata: Metadata = {
  title: "لیست محصولات",
  description:
    "مجموعه‌ای از بهترین و باکیفیت‌ترین محصولات با طراحی‌های نوآورانه و کاربردی. از پکیجینگ و لوازم جانبی تا محصولات خاص، تمامی کالاها با تضمین کیفیت و قیمت رقابتی در دسترس شماست. خرید آسان و مطمئن از فروشگاه ما!",
};

// Main component that renders the products list page
export default function ProductsPage() {
  return (
    <div className="max-w-[1024px] pt-16 mx-auto">
      {/* Render the client-side component that displays the list of products */}
      <ProductListClient />
    </div>
  );
}
