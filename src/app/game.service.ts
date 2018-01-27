import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Game, GameList } from './game';
import { ListParam } from './listparam';

const httpOptions = {
  headers: new HttpHeaders({ 'Accept-Language': 'en-GB', 'CherryTech-Brand': 'cherrycasino.desktop' })
};

@Injectable()
export class GameService {

  private gameUrl = 'https://staging-frontapi.cherrytech.com/games';
  private listUrl = 'https://staging-frontapi.cherrytech.com/game-categories';

  constructor(
    private http: HttpClient
  ) { }

  getGames(param: ListParam): Observable<GameList> {
    const start = param.page * param.max;
    const stop = start + param.max;

    if (!isNaN(start)) {
      return this.http.get<GameList>(`${this.listUrl}/${param.categorySlug}?page=${param.page + 1}&page_size=${param.max}`, httpOptions)
        .pipe(
        map(result => {
          return {
            games: result._embedded.games.slice(start, stop),
            total: result._embedded.games.length
          };
        }),
        catchError(console.log('Game Service - retriving games fail')),
      );
    } else {
      return of({games: [], total: 0, _embedded: {games: []}});
    }
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<GameList>(`${this.gameUrl}/${id}`, httpOptions)
      .pipe(
      catchError(console.log('Game Service - retriving games fail')),
    );
  }

}
