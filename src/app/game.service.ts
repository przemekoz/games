import { Injectable } from '@angular/core';
import { Game } from './game';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GameService {

  constructor() { }

  getGames(slug: string): Observable<Game[]> {
    console.log('Game service: ' + slug);
    return of([
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
    ]);
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
