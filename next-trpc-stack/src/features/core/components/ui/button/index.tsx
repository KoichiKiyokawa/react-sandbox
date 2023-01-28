import type { ComponentProps } from "react";

type Props = {
	children: React.ReactNode;
} & ComponentProps<"button">;

export const Button = ({ children, ...args }: Props) => {
	return <button {...args}>{children}</button>;
};
