import Link from "next/link";
import Button from ".";
import { useRef } from "react";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";

const Hoge = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const bRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={bRef}>hoge</Button>
      <Button as={Link} href="/" ref={ref}>
        hoge
      </Button>
      <Link href="/" ref={ref}></Link>
    </>
  );
};

test("snapshot", () => {
  const { asFragment } = render(
    <Button as="a" href="hoge">
      hoge
    </Button>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <a
        href="hoge"
      >
        hoge
      </a>
    </DocumentFragment>
  `);
});
