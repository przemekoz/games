import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackendService {

    constructor(private http: HttpClient) { }

    // getAll(interfaceName): Observable<> {
    //     return this.http.get<interfaceName>(this.categoriesUrl, httpOptions)
    //         .pipe(
    //         map(result => result._embedded.game_categories)
    //         );
    // }

    getAll(url, params) {
        return of({ items: [], total: 0 });
    }
}
