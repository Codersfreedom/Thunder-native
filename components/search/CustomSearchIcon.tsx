import { View, Text } from "react-native";
import React from "react";
import { SearchIcon } from "lucide-react-native";

const CustomSearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 text-emerald-400"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow)">
        <SearchIcon d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
      </g>
    </svg>
  );
};

export default CustomSearchIcon;
