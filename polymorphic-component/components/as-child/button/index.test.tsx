import { render } from "@testing-library/react";
import Button from ".";
import { expect, test } from "vitest";

test("snapshot", () => {
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
