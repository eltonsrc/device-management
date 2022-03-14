import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.css']
})
export class CategoryShowComponent implements OnInit {
  category?: Category;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }
}
