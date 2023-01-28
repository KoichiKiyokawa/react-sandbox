import { AppRouter } from "@/features/core/core.router";
import { expect, test } from "@playwright/test";
import { inferRouterOutputs } from "@trpc/server";

test("should list post contents", async ({ page }) => {
  await page.route("/api/trpc/post.list?*", async (route) => {
    const json: inferRouterOutputs<AppRouter>["post"]["list"] = [
      {
        id: 1,
        title: "post1",
        content: "content1",
        authorId: 1,
        published: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    await route.fulfill({ json });
  });

  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");

  expect(await page.screenshot()).toMatchSnapshot();
});
