import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  selectedCategory: Category;
  categories: Category[];

  constructor(
    private location: Location,
    private categoryService: CategoryService) {
    this.selectedCategory = null;
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    // Get categories
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
