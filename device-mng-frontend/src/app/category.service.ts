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
}
