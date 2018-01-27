import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of([
      {
        order: 0,
        name: 'Popular Games',
        slug: 'popular-games',
      },
      {
        order: 1,
        name: 'Video slots',
        slug: 'video-slots',
      },
      {
        order: 2,
        name: 'Table Games',
        slug: 'table-games',
      }
    ]);
  }

}
