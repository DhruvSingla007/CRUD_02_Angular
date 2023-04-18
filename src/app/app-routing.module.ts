import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./components/update-employee/update-employee.component";
import {ViewEmployeeComponent} from "./components/view-employee/view-employee.component";

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
    children: []
  },
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },

  {
    path: 'create-employee',
    component: CreateEmployeeComponent,
    children: []
  },
  {
    path: 'update-employee/:id',
    component: UpdateEmployeeComponent,
    children: []
  },
  {
    path: 'employee/:id',
    component: ViewEmployeeComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
