import { render, screen, waitFor } from "@testing-library/react";
import Link from "next/link";
import { describe, expect, test } from "vitest";
import Button from ".";
import { useEffect, useRef } from "react";

test("snapshot", () => {
  const { asFragment } = render(
    <Button render={<Link href="/" />}>hoge</Button>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <a
        class="button"
        href="/"
      >
        hoge
      </a>
    </DocumentFragment>
  `);
});

describe("ref", () => {
  test("base ref to button element", async () => {
    const Wrapper = () => {
      const ref = useRef<HTMLButtonElement>(null);

      useEffect(() => {
        ref.current?.focus();
      }, []);

      return <Button ref={ref}>hoge</Button>;
    };

    render(<Wrapper />);
    await waitFor(() => expect(screen.getByRole("button")).toHaveFocus());
  });

  test("ref to render element", async () => {
    const Wrapper = () => {
      const ref = useRef<HTMLAnchorElement>(null);

      useEffect(() => {
        ref.current?.focus();
      }, []);

      return <Button render={<Link href="/" ref={ref} />}>hoge</Button>;
    };

    render(<Wrapper />);
    await waitFor(() => expect(screen.getByRole("link")).toHaveFocus());
  });
});
