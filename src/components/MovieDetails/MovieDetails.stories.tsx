import { StoryFn } from "@storybook/react";
import MovieDetails from "./MovieDetails";
import "./MovieDetails.scss";

export default {
  title: "React GMP",
  component: MovieDetails,
};

const Template: StoryFn<typeof MovieDetails> = (args) => <MovieDetails {...args} />;

export const MovieDetailsComponent = Template.bind({});

const movie = {
  movieInfo: {
    id: 284054,
    title: "Black Panther",
    tagline: "Long live the king",
    voteAverage: 7.3,
    voteCount: 3788,
    releaseDate: "2018-02-13",
    posterPath: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    overview:
      "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    budget: 200000000,
    revenue: 1245257672,
    genres: ["Action", "Adventure", "Fantasy", "Science Fiction"],
    runtime: 134,
  },
  onSearchClick: () => {},
};

MovieDetailsComponent.args = { ...movie };
