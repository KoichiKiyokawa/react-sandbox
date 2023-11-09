import { cloneElement, forwardRef, isValidElement } from "react";

type Common = {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
};

export type ButtonProps =
  | ({ element: React.ReactElement } & Common)
  | ({ element?: undefined } & Common &
      React.ComponentPropsWithoutRef<"button">);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, element, ...props }, ref) => {
    if (isValidElement(element)) {
      return cloneElement(element, undefined, children);
    } else {
      return (
        <button ref={ref} {...props}>
          {children}
        </button>
      );
    }
  }
);

Button.displayName = "Button";

export default Button;
