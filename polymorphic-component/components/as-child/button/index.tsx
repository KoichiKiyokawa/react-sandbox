import { cloneElement, forwardRef, isValidElement } from "react";
import styles from "../../render/button/index.module.css";
import clsx from "clsx";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
} & (
  | { asChild: true; children: React.ReactElement }
  | ({ asChild?: false } & React.ComponentPropsWithoutRef<"button">)
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "priamry", disabled, leftIcon, rightIcon, asChild = false, children, ...buttonProps },
  ref
) {
  const shouldActAsChild = asChild && isValidElement(children);

  return cloneElement(
    shouldActAsChild ? children : <button ref={ref} type="button" disabled={disabled} {...buttonProps} />,
    {
      "data-variant": variant,
      className: clsx(
        styles.button,
        shouldActAsChild && children.props.className,
        "className" in buttonProps && buttonProps.className
      ),
      ...(disabled && { "aria-disabled": true, href: undefined }),
    },
    leftIcon ? <span className={styles.leftIcon}>{rightIcon}</span> : null,
    shouldActAsChild ? children.props.children : children,
    rightIcon ? <span className={styles.rightIcon}>{rightIcon}</span> : null
  );
});

export default Button;
