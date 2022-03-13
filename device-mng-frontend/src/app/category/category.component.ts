import { Component, OnInit } from '@angular/core';
import { CATEGORIES, Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  selectedCategory?: Category;
  categories = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
}
