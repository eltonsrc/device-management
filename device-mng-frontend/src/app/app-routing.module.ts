import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryShowComponent } from './category-show/category-show.component';
import { CategoryComponent } from './category/category.component';
import { DeviceComponent } from './device/device.component';

const routes: Routes = [
  { path: '', redirectTo: '/devices', pathMatch: 'full'},
  { path: 'categories', component: CategoryComponent},
  { path: 'category/:id', component: CategoryShowComponent},
  { path: 'category', component: CategoryCreateComponent},
  { path: 'devices', component: DeviceComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
