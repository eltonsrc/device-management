import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DeviceComponent } from './device/device.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryShowComponent } from './category-show/category-show.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { DeviceShowComponent } from './device-show/device-show.component';
import { DeviceCreateComponent } from './device-create/device-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DeviceComponent,
    CategoryShowComponent,
    CategoryCreateComponent,
    DeviceShowComponent,
    DeviceCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
