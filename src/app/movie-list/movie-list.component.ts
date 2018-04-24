import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  pageTitle: string = 'Movie List';
  listFilter: string;
  errorMessage: string;
  movies: IMovie[];

  constructor(private _movieService: MovieService) {

  }

  ngOnInit(): void {
    this._movieService.getMovies()
      .subscribe(
        movies => this.movies = movies,
        error => this.errorMessage = <any>error);
  }
}
