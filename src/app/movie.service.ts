import { Injectable } from '@angular/core';
import {IMovie} from './movie';

import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  //URL to marvel API
  private _movieUrl: string = " http://www.omdbapi.com/?i=tt3896198&apikey=63e30b4e";
  //user public key required to connect to the API
  private apikey: string = '63e30b4e';

  constructor (private httpSevice: Http) {}

getMovies(): Observable<any>{
     return this.httpSevice.get(`${this._movieUrl}?limit=805apikey=${this.apikey}`)
       .map(this.extractData)
       .do(data => console.log("All: " + JSON.stringify(data))) //for debug
       .catch(this.handleError);
}

  
private extractData(res: any){
  let body = res.json();
  return body || {};
}

private handleError(error: Response) {
  console.error(error);
  return Observable.throw(error.json() || 'Server error');
}

}
