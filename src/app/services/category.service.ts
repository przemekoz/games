import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { BackendService } from '../_core/services/backend.service';

@Injectable()
export class CategoryService {

    private categories: Category[] = [];

    constructor(private backend: BackendService) { }

    getCategories(): Observable<Category[]> {
        // this.backend.getAll(Category).then((categories: Category[]) => {
        //     this.categories.push(...categories); // fill cache
        // });
        // return this.categories;
        return of([]);
    }
}
