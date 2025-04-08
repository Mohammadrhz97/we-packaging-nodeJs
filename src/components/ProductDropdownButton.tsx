"use client";
import { ReactNode } from "react"; // Importing ReactNode type for child components
import { MdKeyboardArrowLeft } from "react-icons/md"; // Importing left arrow icon

// Props interface for ProductDropdownButton component
interface ProductDropdownButtonProps {
  children: ReactNode; // Accepts React nodes as children (text, components, etc.)
}

function ProductDropdownButton({ children }: ProductDropdownButtonProps) {
  // Button classes
  const buttonClasses =
    "flex items-center justify-between gap-3 cursor-pointer rounded-lg w-52 hover:bg-gray-800/75 hover:border hover:backdrop-blur-lg border-black/75 transition duration-200 ease-in-out hover:scale-105 pr-2";

  return (
    // List item wrapping the button to ensure proper layout
    <li className="flex items-center justify-end">
      {/* Button with dynamic styling */}
      <button className={buttonClasses}>
        {/* Icon for left arrow */}
        <span>
          <MdKeyboardArrowLeft />
        </span>
        {children}
      </button>
    </li>
  );
}

export default ProductDropdownButton;
