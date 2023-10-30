import { expect, browser, $, $$ } from "@wdio/globals";

describe("application e2e test", () => {
  it("should search for movie and get results", async () => {
    await browser.url("/");
    const searchField = await $("input.search-form__input");
    const searchButton = await $("input.search-form__button");
    const movieTileImage = await $("img.movie-tile__image");
    const searchResults = await $("div.layout__main__results");

    await searchField.clearValue();
    await searchField.addValue("Avengers");
    await searchButton.click();

    await expect(movieTileImage).toBeDisplayed();
    await expect(searchResults).toHaveTextContaining("4");
  });

  it("should display movie details after clicking on movie tile", async () => {
    const searchField = await $("input.search-form__input");
    const searchButton = await $("input.search-form__button");
    const movieTileImage = await $("img.movie-tile__image");
    const movieDetailsImage = await $("img.movie-details__poster");

    await movieTileImage.click();

    await expect(movieDetailsImage).toBeDisplayed();
    await expect(searchField).not.toBeDisplayed();
    await expect(searchButton).not.toBeDisplayed();
  });

  it("should display search bar after clicking on search icon", async () => {
    const searchField = await $("input.search-form__input");
    const searchButton = await $("input.search-form__button");
    const movieDetailsImage = await $("img.movie-details__poster");
    const searchIconButton = await $("button.search-button");

    await searchIconButton.click();

    await expect(movieDetailsImage).not.toBeDisplayed();
    await expect(searchField).toBeDisplayed();
    await expect(searchButton).toBeDisplayed();
  });

  it("should sort movies by title in ascending order", async () => {
    const sortMenu = await $("select.sort-control__select");

    const firstMovieBefore = await $$("div.movie-tile__name")[0];
    await expect(firstMovieBefore).toHaveTextContaining("The Avengers");

    await sortMenu.selectByAttribute("value", "title");

    const firstMovieAfter = await $$("div.movie-tile__name")[0];
    await expect(firstMovieAfter).toHaveTextContaining("Avengers: Age of Ultron");
  });

  it("should change sorting genre to 'Documentary'", async () => {
    const genreSortMenu = await $$("div.genre-select__text");

    await genreSortMenu[1].click();

    const documentaryGenre = await $$("input.genre-select__button")[1];
    const searchResults = await $("div.layout__main__results");
    await expect(searchResults).toHaveTextContaining("4");
    await expect(documentaryGenre).toBeChecked();
  });
});
