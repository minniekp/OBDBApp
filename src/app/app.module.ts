import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';
import { MovieFilterPipe } from './movie-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES: Routes = [
  { path: 'Movies', component: MovieListComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
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
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
