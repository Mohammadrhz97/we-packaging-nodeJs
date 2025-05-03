import OutOfSpaceProjectClient from "./OutOfSpaceProjectClient";
import { Metadata } from "next";

// Define static metadata for the page (title and description)
export const metadata: Metadata = {
  title: "Out Of Space Project",
  description:
    "در این پروژه عکاسی و فیلم‌برداری تبلیغاتی، مجموعه ما با تمرکز بر برندسازی، طراحی هویت بصری و پکیجینگ خلاقانه، به معرفی حرفه‌ای برند پن پرداخت. این پروژه با هدف افزایش جذابیت بصری، اعتماد مخاطب و ارتقاء جایگاه برند اجرا شده است. نمونه‌ای کامل از تلفیق هنر، تبلیغات و استراتژی برندینگ.",
};

// Main component that renders the products list page
export default function ProductsPage() {
  return (
    <div className="max-w-[1024px] pt-16 mx-auto">
      {/* Render the client-side component that displays the list of products */}
      <OutOfSpaceProjectClient />
    </div>
  );
}
