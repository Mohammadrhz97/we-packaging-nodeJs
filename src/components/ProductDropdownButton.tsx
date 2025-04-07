import { ReactNode } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface ProductDropdownButtonProps {
  children: ReactNode;
}

function ProductDropdownButton({ children }: ProductDropdownButtonProps) {
  const buttonClasses =
    "flex items-center justify-between gap-3 cursor-pointer rounded-lg w-52 hover:bg-gray-800/75 hover:border hover:backdrop-blur-lg border-black/75 transition duration-200 ease-in-out hover:scale-105 pr-2";

  return (
    <li className="flex items-center justify-end">
      <button className={buttonClasses}>
        <span>
          <MdKeyboardArrowLeft />
        </span>
        {children}
      </button>
    </li>
  );
}

export default ProductDropdownButton;
