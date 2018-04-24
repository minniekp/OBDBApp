import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MovieService {

  // URL to marvel API
  private _movieUrl: string = 'http://www.omdbapi.com/?i=tt3896198';
  // user public key required to connect to the API
  private apikey: string = '63e30b4e';

  constructor (private httpSevice: HttpClient) {}

  getMovies(): Observable<any> {
    return this.httpSevice.get(`${this._movieUrl}&limit=805&apikey=${this.apikey}`)
      .map(this.extractData)
      .do(data => console.log('All: ' + JSON.stringify(data))) // for debug
      .catch(this.handleError);
  }


  private extractData(res: any) {
    return [res];
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }

}
