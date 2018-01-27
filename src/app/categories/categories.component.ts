import { Component, OnInit } from '@angular/core';
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

  constructor(private categoryService: CategoryService) {
    this.selectedCategory = null;
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  ngOnInit() {
    // Get categories
    this.categories = this.categoryService.getCategories();
  }

}
