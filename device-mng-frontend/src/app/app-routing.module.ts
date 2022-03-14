import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DeviceComponent } from './device/device.component';

const routes: Routes = [
  { path: '', redirectTo: '/devices', pathMatch: 'full'},
  { path: 'categories', component: CategoryComponent},
  { path: 'devices', component: DeviceComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
