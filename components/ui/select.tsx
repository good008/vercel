import React from "react";

interface SelectNativeProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}

export function SelectNative({ name, value, onChange, options }: SelectNativeProps) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}