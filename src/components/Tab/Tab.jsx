import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

/**
 * @component Tab
 * @description Represents a tab component with optional active state and click handler.
 * @param {React.ReactNode} children - The content of the tab.
 * @param {boolean} active - Indicates whether the tab is active.
 * @param {function} onClick - The function to be called when the tab is clicked.
 */

const Tab = ({ children, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex justify-between items-center gap-3 ${
        active
          ? "text-white text-[32px] font-bold"
          : "text-[#ffffff50] font-montserrat text-[24px] font-normal"
      }`}
    >
      {active && (
        <BsFillPlayFill className="text-white text-[32px] font-bold" />
      )}
      {children}
      {active && (
        <BsFillPlayFill className="text-white text-[32px] font-bold rotate-180" />
      )}
    </div>
  );
};

export default Tab;
