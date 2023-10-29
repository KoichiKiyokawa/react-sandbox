import clsx from "clsx";
import { cloneElement, forwardRef, isValidElement } from "react";
import styles from "../../render/button/index.module.css";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
} & (
  | {
      asChild: true;
      children: React.ReactNode;
    }
  | ({ children?: React.ReactNode } & React.ComponentPropsWithoutRef<"button">)
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { size, ...props },
  ref
) {
  if ("asChild" in props) {
    if (isValidElement(props.children)) {
      return cloneElement(props.children, {
        className: clsx(styles.button, props.children.props.className),
      } as any);
    } else {
      return props.children;
    }
  }

  return (
    <button
      {...props}
      ref={ref}
      className={clsx(styles.button, props.className)}
    >
      Button
    </button>
  );
});

export default Button;
