import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Game, GameList } from './game';
import { ListParam } from './listparam';

const httpOptions = {
  headers: new HttpHeaders({ 'Accept-Language': 'en-GB' })
};

@Injectable()
export class GameService {

  private gameUrl = '/games';
  private listUrl = '/game-categories';

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
              total: result._embedded.games.length,
              _embedded: { games: [] }
            };
          }),
          catchError(result => result)
        );
    } else {
      return of({ games: [], total: 0, _embedded: { games: [] } });
    }
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.gameUrl}/${id}`, httpOptions);
  }

  searchGames(term: string): Observable<Game[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Game>(`${this.gameUrl}?term=${term}`, httpOptions)
      .pipe(
      map(result => result._embedded.games.filter(item => {
        return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
      }).slice(0, 5)),
      catchError(result => result)
      );
  }
}
