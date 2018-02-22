import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from '../interfaces/game';
import { ListParam, List } from '../interfaces/list';
import { ComponentList } from '../interfaces/componentList';
import { BackendService } from '../core/services/backend.service';
import { CacheService } from '../core/services/cache.service';

@Injectable()
export class GameService implements ComponentList {

    constructor(private backend: BackendService, private listCache: CacheService) { }

    getList(param: ListParam): Observable<List> {
        console.log('game.service: getList', param);
        const observable = this.backend.getAll('api/games', param);
        return this.listCache.get('gamesList', observable, param);
    }

    getGame(id: string): Observable<Game> {
        console.log('game.service: getGame', id);
        const observable = this.backend.getAll('api/game', id);
        return this.listCache.get('game', observable, id);
    }

    searchGames(term: string): Observable<Game[]> {
        return of([]);
    }
}
