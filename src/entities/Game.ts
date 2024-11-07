import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publishers";

export interface Game {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
  slug: string;
}

export interface GameScreenshot {
  id: number;
  image: string;
  width: string;
  height: string;
}

export interface GameTrailer {
  id: string;
  name: string;
  preview: string;
  data: {
    max: string;
  };
}
