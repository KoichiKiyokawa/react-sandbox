import { render, screen } from "@testing-library/react";
import Button from ".";
import { describe, expect, test } from "vitest";
import { useEffect, useRef } from "react";

describe("snapshot", () => {
  const Icon = () => <svg />;

  test("snapshot (as button)", () => {
    const { asFragment } = render(<Button className="foo">hoge</Button>);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="button foo"
          data-variant="priamry"
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
          data-variant="priamry"
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
          data-variant="priamry"
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
          data-variant="priamry"
          type="button"
        >
          hoge
          <span
            class="rightIcon"
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
          data-variant="priamry"
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
          data-variant="priamry"
          href="/hoge"
        >
          hoge
          <span
            class="rightIcon"
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
          data-variant="priamry"
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

  test("ref(button)", () => {
    const Component = () => {
      const ref = useRef<HTMLButtonElement>(null);

      useEffect(() => {
        ref.current?.focus();
      });

      return <Button ref={ref}>hoge</Button>;
    };

    render(<Component />);

    expect(screen.getByText("hoge")).toHaveFocus();
  });

  test("ref(link)", () => {
    const Component = () => {
      const ref = useRef<HTMLAnchorElement>(null);

      useEffect(() => {
        ref.current?.focus();
      });

      return (
        <Button asChild>
          <a href="..." ref={ref}>
            hoge
          </a>
        </Button>
      );
    };

    render(<Component />);

    expect(screen.getByText("hoge")).toHaveFocus();
  });
});

describe("type check", () => {
  test("when use `asChild`", () => {
    // @ts-expect-error missing children
    <Button asChild></Button>;

    // @ts-expect-error children should be ReactElement
    <Button asChild>hoge</Button>;

    // @ts-expect-error cannot pass ref when use `asChild`
    <Button asChild ref={null}></Button>;
  });
});
