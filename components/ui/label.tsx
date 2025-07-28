import React from "react";

interface LabelProps {
  children: React.ReactNode;
}

export function Label({ children }: LabelProps) {
  return <label className="block mb-2 font-bold">{children}</label>;
}