import React from "react";

export const TextInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="text"
      {...props}
      className={`px-6 py-3 text-[1.25rem] rounded ${props.className}`}
    />
  );
};
