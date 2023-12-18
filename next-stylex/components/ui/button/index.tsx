import { cloneElement, forwardRef, isValidElement } from "react";
import stylex, { StyleXStyles } from "@stylexjs/stylex";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
} & (
  | { asChild: true; children: React.ReactElement }
  | ({
      asChild?: false;
      stylex?: StyleXStyles;
    } & React.ComponentPropsWithRef<"button">)
);

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
        <div />
      ) : (
        children
      )
    ) : (
      <button ref={ref} type="button" disabled={disabled} {...buttonProps} />
    ),
    {
      "data-variant": variant,
      ...stylex.props(
        buttonStyles.base,
        buttonStyles[variant],
        shouldActAsChild && children.props.stylex,
        "stylex" in buttonProps && buttonProps.stylex
      ),
      ...(disabled && { "aria-disabled": true }),
    },
    leftIcon ? <span {...stylex.props(iconStyles)}>{leftIcon}</span> : null,
    shouldActAsChild ? children.props.children : children,
    rightIcon ? <span className={styles.rightIcon}>{rightIcon}</span> : null
  );
}) as React.FC<ButtonProps>;

export default Button;

const buttonStyles = stylex.create({
  base: {},
  primary: {},
  secondary: {},
});

const iconStyles = stylex.create({});
