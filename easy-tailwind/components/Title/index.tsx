import { twMerge } from "tailwind-merge";

type Props = React.PropsWithChildren<{
  level: 1 | 2 | 3 | 4 | 5 | 6;
}>;

export const Title: React.FC<Props> = ({ level, children }) => {
  const Component = `h${level}` as const;

  return (
    <Component
      className={twMerge(
        "text-white",
        level === 1 && "text-2xl",
        level === 2 && "text-xl"
      )}
    >
      {children}
    </Component>
  );
};
