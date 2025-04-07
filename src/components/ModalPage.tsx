import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5"; // Close icon
import { MdOutlineLocalPhone } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";

// Props interface for controlling modal visibility
interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalPage: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [show, setShow] = useState(isOpen);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  // Handle fade-out animation when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setShow(false), 300); // Delay hides modal after fade
      return () => clearTimeout(timer);
    } else {
      setShow(true);
    }
  }, [isOpen]);

  // Close modal if overlay is clicked
  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  // Prevent closing when clicking inside modal content
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Do not render modal at all when hidden
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      {/* Modal Container */}
      <div
        className={`bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleModalClick}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white transition hover:scale-125"
          onClick={() => setIsOpen(false)}
        >
          <IoClose className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="mt-4">
          <h1 className="text-white text-center font-semibold text-lg">
            :راه های ارتباطی
          </h1>

          {/* Phone Section */}
          <div className="mt-8 flex flex-col">
            <p className="text-white text-right text-md">:شماره تماس</p>
            <div className="flex justify-evenly flex-wrap">
              <a
                href="tel:09357008288"
                className="flex items-center justify-between px-4 p-1 hover:scale-105 w-40 mt-4 border border-gray-800 rounded-2xl cursor-pointer gap-3 transition"
              >
                <MdOutlineLocalPhone className="w-5 h-5 text-white" />
                <span className="text-white text-lg">09357008288</span>
              </a>
              <a
                href="tel:021555555"
                className="flex items-center justify-between px-4 p-1 hover:scale-105 w-40 mt-4 border border-gray-800 rounded-2xl cursor-pointer gap-3 transition"
              >
                <GiRotaryPhone className="w-5 h-5 text-white" />
                <span className="text-white text-lg">021555555</span>
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className="mt-8 flex flex-col">
            <p className="text-white text-right text-md">:فضای مجازی</p>
            <div className="flex justify-evenly flex-wrap">
              {/* WhatsApp */}
              <a
                href="https://wa.me/09357008288"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 p-1 hover:scale-105 w-40 mt-4 border border-gray-800 rounded-2xl cursor-pointer gap-3 transition"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span className="text-white text-lg">Whats App</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/your_telegram_username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 p-1 hover:scale-105 w-40 mt-4 border border-gray-800 rounded-2xl cursor-pointer gap-3 transition"
              >
                <FaTelegramPlane className="w-5 h-5 text-white" />
                <span className="text-white text-lg">Telegram</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/direct/new/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 p-1 hover:scale-105 w-40 mt-4 border border-gray-800 rounded-2xl cursor-pointer gap-3 transition"
              >
                <FaInstagram className="w-5 h-5 text-white" />
                <span className="text-white text-lg">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
