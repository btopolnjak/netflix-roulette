import { expect, browser, $ } from "@wdio/globals";

describe("Counter component", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("should increase value by 1", async () => {
    const counter = await $("p.counter__number");
    const increaseButton = await $("button=+");
    await increaseButton.click();

    await expect(counter).toHaveText("101");
  });

  it("should decrease value by 1", async () => {
    const counter = await $("p.counter__number");
    const decreaseButton = await $("button=-");
    await decreaseButton.click();

    await expect(counter).toHaveText("99");
  });
});
