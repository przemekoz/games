import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Game, GameList } from './game';
import { ListParam } from './listparam';

@Injectable()
export class GameService {

    constructor(private http: HttpClient) { }

    getGames(param: ListParam): Observable<GameList> {
        const start = param.page * param.max;
        const stop = start + param.max;

        return of({ games: [], total: 0 });
    }

    getGame(id: string): Observable<Game> {
        return of({
            id: '1',
            name: 'name',
            description: 'descrition',
            created_at: {
                date: '123123123',
                timezone_type: 123,
                timezone: 'pl'
            },
            enabled: true
        });
    }

    searchGames(term: string): Observable<Game[]> {
        return of([]);
    }
}
