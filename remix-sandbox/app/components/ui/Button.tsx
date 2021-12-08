import classNames from "classnames";
import React from "react";
import { Link } from "remix";

type Variant = "primary" | "info";

type Props = {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantToColor: Record<Variant, string> = {
  primary: "bg-blue-400",
  info: "bg-gray-400",
};

export const Button = ({ variant = "primary", href, children, className }: Props) => {
  const combinedClass = classNames(
    `px-4 py-2 rounded text-white`,
    className,
    variantToColor[variant]
  );

  return href ? (
    <Link to={href} className={combinedClass}>
      {children}
    </Link>
  ) : (
    <button className={combinedClass}>{children}</button>
  );
};
