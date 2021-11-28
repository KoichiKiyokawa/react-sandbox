import classNames from "classnames";
import React from "react";

type Variant = "primary" | "info";

type Props = {
  variant?: Variant;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantToColor: Record<Variant, string> = {
  primary: "bg-blue-400",
  info: "bg-gray-400",
};

export const Button = ({ variant = "primary", children, className, ...buttonProps }: Props) => (
  <button
    className={classNames(`px-4 py-2 rounded text-white`, className, variantToColor[variant])}
    {...buttonProps}
  >
    {children}
  </button>
);
