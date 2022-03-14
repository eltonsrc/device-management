import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { Device } from '../device/device';
import { DeviceService } from '../device/device.service';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {
  categories?: Category[];
  device = <Device> {};
  submitted = false;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  save(): void {
    this.submitted = true;
    this.deviceService.save(this.device)
      .subscribe(device => this.router.navigate(['devices']));
  }
}
