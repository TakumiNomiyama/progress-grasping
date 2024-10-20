// src/components/ui/progress.tsx
import React from "react";

interface ProgressProps {
  value: number;
  className?: string;
  ariaLabel?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  className,
  ariaLabel,
}) => {
  return (
    <div className={`relative pt-1 ${className}`}>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
        <div
          style={{ width: `${value}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          aria-label={ariaLabel}
        ></div>
      </div>
    </div>
  );
};
