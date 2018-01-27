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

  private gameUrl = 'https://staging-frontapi.cherrytech.com';

  constructor(
    private http: HttpClient
  ) { }

  getGames(param: ListParam): Observable<GameList> {
    console.log('Game service: ', param);

    // Mock !
    const games = [
      {
        id: 'microgaming-thunderstruck-ii',
        name: 'Thunderstruck II',
        slug: 'thunderstruck-ii',
        enabled: true,
        description: '[.] [.] [.] [.] [.] [.] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: '1_microgaming-thunderstruck-ii',
        name: '[1] Thunderstruck II',
        slug: '1_thunderstruck-ii',
        enabled: true,
        description: '[1] [1] [1] [1] [1] [1] [1] [1] [1] [1] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: '[2] microgaming-thunderstruck-ii',
        name: '[2] Thunderstruck II',
        slug: '2_thunderstruck-ii',
        enabled: true,
        description: '[2] [2] [2] [2] [2] [2] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: 'microgaming-thunderstruck-ii',
        name: 'Thunderstruck II',
        slug: 'thunderstruck-ii',
        enabled: true,
        description: '[.] [.] [.] [.] [.] [.] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: '1_microgaming-thunderstruck-ii',
        name: '[1] Thunderstruck II',
        slug: '1_thunderstruck-ii',
        enabled: true,
        description: '[1] [1] [1] [1] [1] [1] [1] [1] [1] [1] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: '[2] microgaming-thunderstruck-ii',
        name: '[2] Thunderstruck II',
        slug: '2_thunderstruck-ii',
        enabled: true,
        description: '[2] [2] [2] [2] [2] [2] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: 'microgaming-thunderstruck-ii',
        name: 'Thunderstruck II',
        slug: 'thunderstruck-ii',
        enabled: true,
        description: '[.] [.] [.] [.] [.] [.] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: '1_microgaming-thunderstruck-ii',
        name: '[1] Thunderstruck II',
        slug: '1_thunderstruck-ii',
        enabled: true,
        description: '[1] [1] [1] [1] [1] [1] [1] [1] [1] [1] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: '[2] microgaming-thunderstruck-ii',
        name: '[2] Thunderstruck II',
        slug: '2_thunderstruck-ii',
        enabled: true,
        description: '[2] [2] [2] [2] [2] [2] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: 'microgaming-thunderstruck-ii',
        name: 'Thunderstruck II',
        slug: 'thunderstruck-ii',
        enabled: true,
        description: '[.] [.] [.] [.] [.] [.] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: '1_microgaming-thunderstruck-ii',
        name: '[1] Thunderstruck II',
        slug: '1_thunderstruck-ii',
        enabled: true,
        description: '[1] [1] [1] [1] [1] [1] [1] [1] [1] [1] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: '[2] microgaming-thunderstruck-ii',
        name: '[2] Thunderstruck II',
        slug: '2_thunderstruck-ii',
        enabled: true,
        description: '[2] [2] [2] [2] [2] [2] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: 'microgaming-thunderstruck-ii',
        name: 'Thunderstruck II',
        slug: 'thunderstruck-ii',
        enabled: true,
        description: '[.] [.] [.] [.] [.] [.] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: '1_microgaming-thunderstruck-ii',
        name: '[1] Thunderstruck II',
        slug: '1_thunderstruck-ii',
        enabled: true,
        description: '[1] [1] [1] [1] [1] [1] [1] [1] [1] [1] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
      {
        id: '[2] microgaming-thunderstruck-ii',
        name: '[2] Thunderstruck II',
        slug: '2_thunderstruck-ii',
        enabled: true,
        description: '[2] [2] [2] [2] [2] [2] Thunderstruck II ...',
        created_at: {
          date: '2013-08-06 14:01:58.000000',
          timezone_type: 1,
          timezone: '+00:00'
        }
      },
    ];

    // return this.http.get('/someUrl')
    // .map(res => res.json()).publishLast().refCount();

    // // create the request, store the `Observable` for subsequent subscribers
    // this.observable = this.http.get(this.url, {
    //   headers: headers
    // })
    // .map(response =>  tets).share();

    const start = param.page * param.max;
    const stop = start + param.max;

    // return this.http.get<GameList>(`${this.gameUrl}/games?page=${param.page + 1}&page_size=${param.max}`, httpOptions)
    return this.http.get<GameList>(`${this.gameUrl}/games`, httpOptions)
    .pipe(
      map(result => {
        return {
          games: result._embedded.games.slice(start, stop),
          // total: result.total_items
          total: 50
        };
      }),
      tap(result => console.log('Game Service - retriving games ok')),
      catchError(console.log('Game Service - retriving games fail')),
    );
  }

  getGame(id: string): Observable<Game> {
    return of({
      id: 'microgaming-thunderstruck-ii',
      name: 'Thunderstruck II',
      slug: 'thunderstruck-ii',
      enabled: true,
      description: 'Thunderstruck II ...',
      created_at: {
        date: '2013-08-06 14:01:58.000000',
        timezone_type: 1,
        timezone: '+00:00'
      }
    });
  }

  
}
