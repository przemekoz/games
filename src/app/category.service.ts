import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Accept-Language': 'en-GB', 'CherryTech-Brand': 'cherrycasino.desktop' })
};

@Injectable()
export class CategoryService {

  private categoriesUrl = 'https://staging-frontapi.cherrytech.com/game-categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category>(this.categoriesUrl, httpOptions)
      .pipe(
        map(result => result._embedded.game_categories)
      );
  }

}
