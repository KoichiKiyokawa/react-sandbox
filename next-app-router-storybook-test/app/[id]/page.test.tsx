import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import * as stories from "./page.stories";

const { Default } = composeStories(stories);

test("", () => {
  const { container } = render(<Default />);
  expect(container).toHaveTextContent("123");
  expect(container).toHaveTextContent("/user/123");
});
