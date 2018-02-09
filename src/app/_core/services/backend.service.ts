import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { List } from '../../interfaces/list';

@Injectable()
export class BackendService {

    constructor(private http: HttpClient) { }

    // getAll(interfaceName): Observable<Game[]> {
    //     return this.http.get<List>(this.categoriesUrl, httpOptions)
    //         .pipe(
    //         map(result => result._embedded.game_categories)
    //         );
    // }

    getAll(url, params): Observable<List> {
        return this.http.get<List>(url);
    }
}
