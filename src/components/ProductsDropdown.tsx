import ProductDropdownButton from "./ProductDropdownButton";
import { ServiceData } from "../constant/constants.index";
import Link from "next/link";

function ProductsDropdown() {
  const data = ServiceData;

  // Slice the first 6 items for the first ul
  const firstSixItems = data.slice(0, 5);

  // Slice the rest of the items for the second ul
  const remainingItems = data.slice(5);

  return (
    <div className="flex fixed top-[60px] right-0 left-0 w-[480px] h-60 z-20 mx-auto rounded-xl shadow-slate-300 bg-black/50 backdrop-blur-lg">
      {/* First dropdown ul */}
      <ul className="text-gray-300 fixed right-0 text-base/10 p-5">
        {firstSixItems.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id}>
            <ProductDropdownButton>{item.title}</ProductDropdownButton>
          </Link>
        ))}
      </ul>

      {/* Second dropdown ul */}
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
