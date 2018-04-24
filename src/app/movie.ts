export interface IMovie {
  MovieId: number;
  Title: string;
  Genre: string;
  Classification: string;
  ReleaseDate: number;
  Rating: number;
  Cast: string[];

}


export class Movie implements IMovie {
  MovieId: number;
  Title: string;
  Genre: string;
  Classification: string;
  ReleaseDate: number;
  Rating: number;
  Cast: string[];
}
