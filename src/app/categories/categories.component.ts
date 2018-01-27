import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  selectedCategory: Category;
  categories: Category[];

  constructor() {
    this.selectedCategory = null;
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  ngOnInit() {
    // Get categories
    this.categories = [
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
