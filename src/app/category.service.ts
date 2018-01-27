import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    return [
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
    ];
  }

}
