import { Component } from '@angular/core';

import 'rxjs/Rx';   // Load all features
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService }  from './movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService],
})

export class AppComponent {
  pageTitle: string = 'Movies Library Dashboard';
}
