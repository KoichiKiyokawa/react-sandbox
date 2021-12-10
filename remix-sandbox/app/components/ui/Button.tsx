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
  primary: "bg-primary",
  info: "bg-gray-400",
};

export const Button = ({ variant = "primary", href, children, className }: Props) => {
  const combinedClass = classNames(
    `px-6 py-3 rounded text-white`,
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
