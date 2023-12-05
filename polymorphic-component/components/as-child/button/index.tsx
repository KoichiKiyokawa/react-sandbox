import clsx from "clsx";
import { cloneElement, forwardRef, isValidElement } from "react";
import styles from "../../render/button/index.module.css";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  rightIcon?: React.ReactElement;
} & (
  | {
      asChild: true;
      children: React.ReactElement;
    }
  | ({
      asChild?: false;
    } & React.ComponentPropsWithoutRef<"button">)
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { size, disabled, rightIcon, asChild = false, children, ...buttonProps },
  ref
) {
  const shouldActAsChild = asChild && isValidElement(children);

  return cloneElement(
    shouldActAsChild ? (
      children
    ) : (
      <button ref={ref} type="button" disabled={disabled} {...buttonProps} />
    ),
    {
      className: clsx(
        styles.button,
        shouldActAsChild && children.props.className,
        "className" in buttonProps && buttonProps.className
      ),
      ...(disabled && { "aria-disabled": true, href: undefined }),
    },
    shouldActAsChild ? children.props.children : children,
    rightIcon ? <span className={styles.right}>{rightIcon}</span> : null
  );
});

export default Button;
