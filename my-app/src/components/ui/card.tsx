// src/components/ui/card.tsx
import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`p-4 shadow rounded ${className}`}>{children}</div>;
};

export const CardContent: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardHeader: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`border-b p-4 ${className}`}>{children}</div>;
};

export const CardTitle: React.FC<CardProps> = ({ className, children }) => {
  return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
};
