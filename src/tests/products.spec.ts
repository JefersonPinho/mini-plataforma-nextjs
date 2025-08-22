import { test, expect } from "@playwright/test";

test("deve exibir a lista de produtos na página inicial", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Home/);

  const firstProductTitle = page.getByRole("heading", {
    name: /Fjallraven - Foldsack No. 1 Backpack/i,
  });
  await expect(firstProductTitle).toBeVisible();

  const productLinks = page.locator('a[href^="/products/"]');

  const count = await productLinks.count();
  expect(count).toBeGreaterThan(15);
});

test.describe("Tratamento de Erros da API", () => {
  test("deve exibir a página 404 se a API de produtos falhar", async ({
    page,
  }) => {
    await page.route("https://fakestoreapi.com/products", async (route) => {
      console.log("Interceptando e falhando a rota:", route.request().url());
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ message: "Erro forçado pelo teste Playwright" }),
      });
    });
    await page.goto("/");
    const errorTitle = page.getByRole("heading", { name: "404" });
    const errorMessage = page.getByText("This page could not be found");

    await expect(errorTitle).toBeVisible();
    await expect(errorMessage).toBeVisible();
  });
});
