import { etw } from "easy-tailwind";
import { cloneElement, forwardRef, isValidElement } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  hasError?: boolean;
} & (
  | { asChild: true; children: React.ReactElement }
  | ({ asChild?: false } & React.ComponentPropsWithoutRef<"input">)
);

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  function Input({ hasError, asChild = false, children, ...inputProps }, ref) {
    const actAsChild = asChild && isValidElement(children);

    return cloneElement(
      actAsChild && isValidElement(children) ? (
        children
      ) : (
        <input ref={ref} {...inputProps} />
      ),
      {
        className: twMerge(
          etw(
            "border-2 border-transparent rounded-lg px-4 py-2 text-gray-600 bg-white"
          ),
          hasError && "border-red-500",
          actAsChild && children.props.className,
          "className" in inputProps && inputProps.className
        ),
      }
    );
  }
);
