import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}

const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: Props) => {
  return (
    // Button code
    <button
      className={`inline-flex py-3 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000319,45%,#175ebf,55%,#000319)] bg-[length:200%_100%] px-8 font-medium text-slate-200 transition-colors gap-3 ${otherClasses}`}
      onClick={handleClick}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default ShimmerButton;
