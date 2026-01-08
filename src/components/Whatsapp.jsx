import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = () => {
  const openWhatsApp = () => {
    const phoneNumber = "8697114527";
    const message = "Hello! I want to connect with you.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed right-4 md:left-4 w-fit bottom-4 z-[999] bg-green-500 p-4 rounded-full cursor-pointer hover:scale-110 transition"
      onClick={openWhatsApp}
    >
      <BsWhatsapp className="text-white" size={32} />
    </div>
  );
};

export default Whatsapp;
