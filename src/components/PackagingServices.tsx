import ProductDropdownButton from "./ServicesDropdownButton";
import { ServiceData } from "../constant/constants.index";
import Link from "next/link";

function PackagingServices() {
  return (
    <div className="w-[240px] h-[480px] z-20 mx-auto rounded-xl bg-black/90 backdrop-blur-2xl hidden group-hover:flex">
      {/* First dropdown list */}
      <ul className="text-gray-300 fixed right-0 text-base/10 p-5">
        {ServiceData.map((item) => (
          // Linking to individual product pages using item ID
          <Link href={`/products/${item.id}`} key={item.id}>
            {/* ProductDropdownButton is a wrapper for each product title */}
            <ProductDropdownButton>{item.title}</ProductDropdownButton>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default PackagingServices;
