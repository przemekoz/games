import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';

import { List } from '../../interfaces/list';

// Mock
import { games } from '../../mock-data-model';

@Injectable()
export class BackendService {

    // Mock
    private delayMs: number = 700; // miliseconds

    constructor(private http: HttpClient) { }

    getAll(url, params): Observable<List> {
        const response: List = { items: [], total: 0 };

        // Mock
        if (url === 'api/games') {
            console.log('backend.service: getAll', url, params)
            return of({ items: games, total: 25 }).delay(this.delayMs);
        }
        else {
            return of({ items: [], total: 0 }).delay(this.delayMs);
        }

        // return this.http.get<List>(url);
    }
}
