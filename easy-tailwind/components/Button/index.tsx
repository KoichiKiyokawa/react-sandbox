import { etw } from "easy-tailwind";
import { twMerge } from "tailwind-merge";
import React, { cloneElement, forwardRef, isValidElement } from "react";

type Props = {
  variant: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
} & (
  | { asChild: true; children: React.ReactElement }
  | ({ asChild?: false } & React.ComponentPropsWithoutRef<"button">)
);

const disabledStyle = "opacity-50 cursor-not-allowed bg-gray-400";

export const Button: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(
  function Button(
    { variant, disabled, asChild = false, children, ...buttonProps },
    ref
  ) {
    const actAsChild = asChild && isValidElement(children);

    return cloneElement(
      actAsChild ? (
        children
      ) : (
        <button ref={ref} type="button" disabled={disabled} {...buttonProps} />
      ),
      {
        ...(disabled ? { "aria-disabled": true } : {}),
        className: twMerge(
          etw(
            // common style
            "rounded-lg",
            "px-4 py-2",
            "text-center",

            // variant specific style
            variant === "primary" && "bg-blue-500 text-white",
            variant === "secondary" && "bg-green-500 text-white",

            {
              hover: "opacity-80",
              disabled: disabledStyle,
              ["aria-disabled"]: disabledStyle,
            },
            actAsChild && disabled && "pointer-events-none",
            actAsChild && children.props.className,
            "className" in buttonProps && buttonProps.className
          )
        ),
      },
      actAsChild ? children.props.children : children
    );
  }
);
