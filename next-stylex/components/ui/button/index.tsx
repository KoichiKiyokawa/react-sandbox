import { cloneElement, forwardRef, isValidElement } from "react";
import stylex from "@stylexjs/stylex";

type ButtonProps = {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
} & (
  | { asChild: true; children: React.ReactElement }
  | ({
      asChild?: false;
    } & React.ComponentPropsWithRef<"button">)
);

const buttonStyles = stylex.create({
  base: {},
  primary: {},
  secondary: {},
});

const iconStyles = stylex.create({
  left: {},
  right: {},
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    disabled,
    leftIcon,
    rightIcon,
    asChild = false,
    children,
    ...buttonProps
  },
  ref
) {
  const shouldActAsChild = asChild && isValidElement(children);

  return cloneElement(
    shouldActAsChild ? (
      disabled ? (
        <div aria-disabled />
      ) : (
        children
      )
    ) : (
      <button ref={ref} type="button" disabled={disabled} {...buttonProps} />
    ),
    {
      ...stylex.props(
        buttonStyles.base,
        buttonStyles[variant],
        shouldActAsChild && children.props.style,
        (buttonProps as any).style
      ),
    },
    leftIcon ? (
      <span {...stylex.props(iconStyles.left)}>{leftIcon}</span>
    ) : null,
    shouldActAsChild ? children.props.children : children,
    rightIcon ? (
      <span {...stylex.props(iconStyles.right)}>{rightIcon}</span>
    ) : null
  );
}) as React.FC<ButtonProps>;

export default Button;
