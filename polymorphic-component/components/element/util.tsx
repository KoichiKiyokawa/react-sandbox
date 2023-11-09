import React from "react";

type PolymorphicComponentProps<P, E extends React.ElementType> =
  | ({ element: React.ReactElement } & P & { children?: React.ReactNode })
  | ({ element?: undefined } & P & React.ComponentPropsWithoutRef<E>);

export const createPolymorphicComponent = <
  Variants,
  Element extends React.ElementType
>({
  tag: Tag,
  displayName,
  variantsToProps,
}: {
  tag: React.ElementType;
  displayName: string;
  variantsToProps: (variants: Variants) => { className: string };
}) => {
  const Component = React.forwardRef<
    Element,
    PolymorphicComponentProps<Variants, Element>
  >((props, ref) => {
    const { element, children, ...variants } = props;
    if (React.isValidElement(element)) {
      return React.cloneElement(
        element,
        variantsToProps(variants as Variants),
        children
      );
    } else {
      return (
        <Tag ref={ref} {...props} {...variantsToProps(variants as Variants)}>
          {props.children}
        </Tag>
      );
    }
  });

  Component.displayName = displayName;
  return Component;
};

const Button = createPolymorphicComponent<
  { variant: "primary" | "secondary" },
  "button"
>({
  tag: "button",
  displayName: "Button",
  variantsToProps: (variants) => ({ className: "" }),
});

<Button variant="primary" element={<a href="/" />}>
  hoge
</Button>;

type ButtonProps = React.ComponentProps<typeof Button>;
