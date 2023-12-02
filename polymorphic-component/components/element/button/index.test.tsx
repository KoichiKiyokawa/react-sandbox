import { render } from "@testing-library/react";
import Link from "next/link";
import { describe, expect, test } from "vitest";
import Button from ".";

test("type check", () => {
  <Button variant="primary">hoge</Button>;
  <Button variant="primary" element={<Link href="/" />}>
    hoge
  </Button>;

  // @ts-expect-error cannot use the type attribute, when passing the element attribute
  <Button variant="primary" type="submit" element={<Link href="/" />}>
    hoge
  </Button>;
});

describe("snapshot", () => {
  test("with right", () => {
    const { asFragment } = render(
      <Button variant="primary" right={<p>right</p>}>
        hoge
      </Button>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="button"
        >
          hoge
          <span
            class="right"
          >
            <p>
              right
            </p>
          </span>
        </button>
      </DocumentFragment>
    `);
  });

  test("without right", () => {
    const { asFragment } = render(<Button variant="primary">hoge</Button>);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="button"
        >
          hoge
        </button>
      </DocumentFragment>
    `);
  });

  test("className joining", () => {
    const { asFragment } = render(
      <Button variant="primary" element={<a className="a-class" />}>
        hoge
      </Button>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <a
          class="button a-class"
        >
          hoge
        </a>
      </DocumentFragment>
    `);
  });
});
