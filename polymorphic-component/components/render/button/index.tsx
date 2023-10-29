import clsx from "clsx";
import { cloneElement, forwardRef, isValidElement } from "react";
import styles from "./index.module.css";

export type ButtonProps = {
  render?: React.ReactElement;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { render, children, className, ...restProps },
  ref
) {
  return cloneElement(
    isValidElement(render) ? render : <button ref={ref} />,
    {
      ...restProps,
      className: clsx(styles.button, className),
    },
    children
  );
});

export default Button;
