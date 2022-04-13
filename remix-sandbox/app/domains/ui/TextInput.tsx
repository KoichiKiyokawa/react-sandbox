import React from "react";
import type { FieldError } from "react-hook-form";

type Props = {
  error?: FieldError;
};

const TextInput = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>(({ error, ...props }, ref) => {
  return (
    <>
      <input
        type="text"
        ref={ref}
        {...props}
        className={`px-6 py-3 text-[1.25rem] border border-gray-400 rounded ${props.className}`}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  );
});

TextInput.displayName = "TextInput";

export { TextInput };
