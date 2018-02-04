import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CategoryService {

    private categoriesUrl = '/game-categories';

    constructor(private http: HttpClient) { }

    getCategories(): Observable<Category[]> {
        // return this.http.get<Category>(this.categoriesUrl, httpOptions)
        //   .pipe(
        //     map(result => result._embedded.game_categories)
        //   );
        return of();
    }
}
