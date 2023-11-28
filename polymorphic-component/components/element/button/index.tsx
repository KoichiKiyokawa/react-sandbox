import { cloneElement, forwardRef } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

export type ButtonProps =
  | React.PropsWithChildren<{
      variant?: "primary" | "secondary";
      right?: React.ReactElement;
    }> &
      (
        | { element: React.ReactElement<HTMLElement> }
        | ({ element?: undefined } & React.ComponentPropsWithoutRef<"button">)
      );

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, right, element, ...buttonProps }, ref) => {
    return cloneElement(
      element ?? <button ref={ref} {...buttonProps} />,
      {
        className: clsx(
          styles.button,
          element?.props.className,
          "className" in buttonProps && buttonProps.className
        ),
      },
      children,
      right && <span className={styles.right}>{right}</span>
    );
  }
);

Button.displayName = "Button";

export default Button;
