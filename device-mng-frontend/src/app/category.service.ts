import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CATEGORIES, Category } from './category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getCategory(id: Number): Observable<Category | undefined> {
    const found = CATEGORIES.find(category => category.id == id);
    return of(found);
  }

  save(category: Category): Observable<Category> {
    category.id = CATEGORIES.length;
    CATEGORIES.push(category);
    return of(category);
  }
}
