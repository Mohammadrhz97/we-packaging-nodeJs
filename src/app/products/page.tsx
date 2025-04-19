import ProductListClient from "./ProductListClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "لیست محصولات",
  description:
    "مجموعه‌ای از بهترین و باکیفیت‌ترین محصولات با طراحی‌های نوآورانه و کاربردی. از پکیجینگ و لوازم جانبی تا محصولات خاص، تمامی کالاها با تضمین کیفیت و قیمت رقابتی در دسترس شماست. خرید آسان و مطمئن از فروشگاه ما!",
};

export default function ProductsPage() {
  return (
    <div className="max-w-[1024px] pt-16 mx-auto">
      <ProductListClient />
    </div>
  );
}
