import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category/category';
import { DeviceService } from '../device.service';
import { Device } from '../device/device';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {
  categories?: Category[];
  device = <Device> {};

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
    this.deviceService.save(this.device)
      .subscribe(device => this.router.navigate(['devices']));
  }
}
