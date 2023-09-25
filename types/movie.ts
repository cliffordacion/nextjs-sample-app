import { ObjectId } from "mongodb";

export interface IMDB {
  rating: number;
  votes: number;
  id: number;
}
export interface Movie {
  _id: ObjectId;
  title: string;
  year: number;
  released: Date;
  plot: string;
  type: "movie" | "series";
  imdb: IMDB;
  metacritic: number;
}