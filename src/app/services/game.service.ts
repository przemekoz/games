import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from '../interfaces/game';
import { ListParam, List } from '../interfaces/list';
import { ComponentList } from '../interfaces/componentList';
import { BackendService } from '../_core/services/backend.service';
import { CacheService } from '../_core/services/cache.service';

@Injectable()
export class GameService implements ComponentList {

    constructor(private backend: BackendService, private listCache: CacheService) { }

    getList(param: ListParam): Observable<List> {
        console.log('game.service: getList', param)
        const observable = this.backend.getAll('api/games', param);
        console.log(typeof observable)
        return this.listCache.get('gamesList', observable, param);
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
