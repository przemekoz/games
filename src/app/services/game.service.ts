import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Game, GameList } from '../interfaces/game';
import { ListParam } from '../interfaces/listparam';
import { ComponentListService } from '../interfaces/componentListService';
import { BackendService } from '../_core/services/backend.service';

@Injectable()
export class GameService implements ComponentListService {

    private games: Game[] = [];

    constructor(private backend: BackendService) { }

    getList(param: ListParam): Game[] {
        this.backend.getAll('get/all', param)
            .subscribe(

            // this.games.push(...categories); // fill cache
            );
        return this.games;
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
