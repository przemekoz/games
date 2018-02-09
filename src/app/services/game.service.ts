import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from '../interfaces/game';
import { ListParam, List } from '../interfaces/list';
import { ComponentList } from '../interfaces/componentList';
import { BackendService } from '../_core/services/backend.service';

@Injectable()
export class GameService implements ComponentList {

    private games: Game[] = [];

    constructor(private backend: BackendService) {
        console.log(this.backend)
    }

    getList(param: ListParam): Observable<List> {
        console.log(this.backend)
        if (this.games.length) {
            // Cache exists
            return of({ items: this.games, total: this.games.length });
        } else {
            this.backend.getAll('https://jsonplaceholder.typicode.com/albums', param)
                .subscribe(response => {
                    this.games.push(...response.items);
                    return of({ items: this.games, total: this.games.length });
                });
        }
    }

    // getGame(id: string): Observable<Game> {
    //     return of({
    //         id: '1',
    //         name: 'name',
    //         description: 'descrition',
    //         created_at: {
    //             date: '123123123',
    //             timezone_type: 123,
    //             timezone: 'pl'
    //         },
    //         enabled: true
    //     });
    // }

    searchGames(term: string): Observable<Game[]> {
        return of([]);
    }
}
