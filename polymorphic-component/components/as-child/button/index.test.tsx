import { render, screen } from "@testing-library/react";
import Button from ".";
import { describe, expect, test } from "vitest";

describe("snapshot", () => {
  const Icon = () => <svg />;

  test("snapshot (as button)", () => {
    const { asFragment } = render(<Button className="foo">hoge</Button>);

    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <button
        class="button foo"
        type="button"
      >
        hoge
      </button>
    </DocumentFragment>
  `);
  });

  test("snapshot (as button + disabled)", () => {
    const { asFragment } = render(
      <Button disabled className="foo">
        hoge
      </Button>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          aria-disabled="true"
          class="button foo"
          disabled=""
          type="button"
        >
          hoge
        </button>
      </DocumentFragment>
    `);
  });

  test("snapshot (as button + aria-disabled)", () => {
    const { asFragment } = render(
      <Button aria-disabled className="foo">
        hoge
      </Button>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          aria-disabled="true"
          class="button foo"
          type="button"
        >
          hoge
        </button>
      </DocumentFragment>
    `);
  });

  test("snapshot (as button + right icon)", () => {
    const { asFragment } = render(
      <Button rightIcon={<Icon />} className="foo">
        hoge
      </Button>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="button foo"
          type="button"
        >
          hoge
          <span
            class="right"
          >
            <svg />
          </span>
        </button>
      </DocumentFragment>
    `);
  });

  test("snapshot (as link)", () => {
    const { asFragment } = render(
      <Button asChild>
        <a href="/hoge" className="link">
          hoge
        </a>
      </Button>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <a
        class="button link"
        href="/hoge"
      >
        hoge
      </a>
    </DocumentFragment>
  `);
  });

  test("snapshot (as link + right icon)", () => {
    const { asFragment } = render(
      <Button asChild rightIcon={<Icon />}>
        <a href="/hoge" className="link">
          hoge
        </a>
      </Button>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <a
          class="button link"
          href="/hoge"
        >
          hoge
          <span
            class="right"
          >
            <svg />
          </span>
        </a>
      </DocumentFragment>
    `);
  });

  test("nested", () => {
    const { asFragment } = render(
      <Button asChild>
        <Button asChild>
          <a href="/hoge" className="link">
            hoge
          </a>
        </Button>
      </Button>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="button button"
          type="button"
        >
          <a
            class="link"
            href="/hoge"
          >
            hoge
          </a>
        </button>
      </DocumentFragment>
    `);
  });
});

describe("behavior", () => {
  test("href should be removed when disabled and render as link", () => {
    render(
      <Button disabled asChild>
        <a href="https://example.com">should be removed</a>
      </Button>
    );

    expect(screen.getByText("should be removed")).not.toHaveAttribute("href");
  });
});

describe("type check", () => {
  test("when use `asChild`", () => {
    // @ts-expect-error missing children
    <Button asChild></Button>;

    // @ts-expect-error children should be ReactElement
    <Button asChild>hoge</Button>;
  });
});
