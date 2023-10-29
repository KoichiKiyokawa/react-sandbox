import { forwardRef } from "react";

type Merge<P, T> = Omit<P, keyof T> & T;

export type ButtonProps<C extends React.ElementType = "button"> = Merge<
  React.ComponentPropsWithRef<C>,
  {
    as?: C;
    children?: React.ReactNode;
  }
>;

const Button = forwardRef<HTMLElement, ButtonProps<any>>(function Button(
  { as: As = "button", children, ...restProps },
  ref
) {
  return (
    <As ref={ref} {...restProps}>
      {children}
    </As>
  );
}) as <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement;

export default Button;
