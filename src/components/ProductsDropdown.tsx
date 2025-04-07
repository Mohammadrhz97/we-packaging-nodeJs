import ProductDropdownButton from "./ProductDropdownButton";
import { ServiceData } from "../constant/constants.index";
import Link from "next/link";

function ProductsDropdown() {
  const data = ServiceData; // Array of service/product data

  // Slice the first 5 items for the first list
  const firstSixItems = data.slice(0, 5);

  // Slice the remaining items for the second list
  const remainingItems = data.slice(5);

  return (
    <div className="flex fixed top-[60px] right-0 left-0 w-[480px] h-60 z-20 mx-auto rounded-xl shadow-slate-300 bg-black/50 backdrop-blur-lg">
      {/* First dropdown list */}
      <ul className="text-gray-300 fixed right-0 text-base/10 p-5">
        {firstSixItems.map((item) => (
          // Linking to individual product pages using item ID
          <Link href={`/products/${item.id}`} key={item.id}>
            {/* ProductDropdownButton is a wrapper for each product title */}
            <ProductDropdownButton>{item.title}</ProductDropdownButton>
          </Link>
        ))}
      </ul>

      {/* Second dropdown list */}
      <ul className="text-gray-300 fixed right-1/2 text-base/10 p-5">
        {remainingItems.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id}>
            <ProductDropdownButton>{item.title}</ProductDropdownButton>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductsDropdown;
