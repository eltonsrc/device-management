import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category = <Category>{};

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.categoryService.save(this.category)
      .subscribe(category => this.router.navigate(['categories']));
  }
}
