import React from "react";
import lotusImg from "../assets/lotus.png";

const LotusAura = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Soft glow */}
      <div
        className="
          absolute w-40 h-40 rounded-full
          bg-yellow-400/20 blur-3xl
        "
      />

      {/* Lotus image */}
      <img
        src={lotusImg}
        alt="Lotus"
        className="relative w-24 h-24 object-contain"
      />
    </div>
  );
};

export default LotusAura;
