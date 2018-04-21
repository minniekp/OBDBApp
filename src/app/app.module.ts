import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';
import { MovieFilterPipe } from './movie-filter.pipe';

export const ROUTES: Routes = [
  { path: '/movies', component: MovieListComponent },
  { path: '**', redirectTo: '' },

];

export const appRouting = RouterModule.forRoot(ROUTES);

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule,
    appRouting,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
