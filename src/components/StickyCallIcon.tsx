"use client";

import Image from "next/image";
import Calling from "../../public/Calling.gif";
import ModalPage from "./ModalPage";
import { useState } from "react";

export default function StickyCallIcon() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Controls the modal for contact

  return (
    <div className="relative">
      <button
        onClick={() => setIsModalOpen(true)} // Open modal on button click
        className="h-12 w-12 rounded-full border border-white bg-white/10 fixed bottom-7 right-7 flex justify-center items-center z-50 lg:hidden cursor-pointer"
      >
        <Image
          src={Calling}
          alt="Calling"
          width={18}
          height={18}
          className="w-12 h-12 object-contain p-1"
          unoptimized
        />
      </button>
      {/* Modal for Calling */}
      <ModalPage isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
