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
    await expect(firstMovieBefore).toHaveTextContaining("The Gold Rush");

    await sortMenu.selectByAttribute("value", "title");

    const firstMovieAfter = await $$("div.movie-tile__name")[0];
    await expect(firstMovieAfter).toHaveTextContaining("¡Three Amigos!");
  });

  it("should change sorting genre to 'Documentary'", async () => {
    const genreSortMenu = await $$("div.genre-select__text");

    await genreSortMenu[1].click();

    const documentaryGenre = await $$("input.genre-select__button")[1];
    const searchResults = await $("div.layout__main__results");
    await expect(searchResults).toHaveTextContaining("0");
    await expect(documentaryGenre).toBeChecked();
  });
});

describe("react-router-dom e2e test", () => {
  it("should render app with 10 movies", async () => {
    await browser.url("/");

    const movieTileImage = await $("img.movie-tile__image");
    const searchResults = await $("div.layout__main__results");

    await expect(movieTileImage).toBeDisplayed();
    await expect(searchResults).toHaveTextContaining("10");
  });

  it("should render movie details", async () => {
    await browser.url("/299536");

    const movieTitle = await $("div.movie-details__title");
    const movieDescription = await $("div.movie-details__description");

    await expect(movieDescription).toBeDisplayed();
    await expect(movieTitle).toHaveTextContaining("AVENGERS: INFINITY WAR");
  });

  it("should search for movie", async () => {
    await browser.url("/?search=Avengers");

    const movieTileImage = await $("img.movie-tile__image");
    const searchResults = await $("div.layout__main__results");
    const inputField = await $("input.search-form__input");

    await expect(movieTileImage).toBeDisplayed();
    await expect(searchResults).toHaveTextContaining("4");
    await expect(inputField).toHaveValue("Avengers");
  });

  it("should change genre to 'Comedy'", async () => {
    await browser.url("/?filter=Comedy");

    const movieTileImage = await $("img.movie-tile__image");
    const searchResults = await $("div.layout__main__results");
    const comedyGenreButton = await $$("input.genre-select__button")[2];

    await expect(movieTileImage).toBeDisplayed();
    await expect(searchResults).toHaveTextContaining("10");
    await expect(comedyGenreButton).toBeChecked();
  });

  it("should search movie in 'Documentary' genre and sort by 'Release date'", async () => {
    await browser.url("/?search=Pandas&filter=Documentary&sortBy=release_date");

    const movieTileImage = await $("img.movie-tile__image");
    const searchResults = await $("div.layout__main__results");
    const documentaryGenreButton = await $$("input.genre-select__button")[1];
    const inputField = await $("input.search-form__input");

    await expect(movieTileImage).toBeDisplayed();
    await expect(searchResults).toHaveTextContaining("1");
    await expect(documentaryGenreButton).toBeChecked();
    await expect(inputField).toHaveValue("Pandas");
  });

  it("should display Error page if URL is invalid", async () => {
    await browser.url("/wrong");

    const errorTitle = await $("h1.error-page__title");
    const errorText = await $("p.error-page__text");

    await expect(errorTitle).toBeDisplayed();
    await expect(errorText).toBeDisplayed();
  });
});
