import type { NextApiRequest, NextApiResponse } from 'next';
import type { Movie, IMDB } from '@/types/movie'; 
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

type MovieSummary = Pick<Movie, "_id" | "title" | "imdb">;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  const movies = db.collection<Movie>("movies");

  
  const { id } = req.query

  const query = { _id: new ObjectId(id as string) };
  const movie = await movies.findOne<MovieSummary>(
    query,
    {
      sort: { rating: -1 },
      projection: { _id: 1, title: 1, imdb: 1 },
    }
  );
  res.json(movie);
}