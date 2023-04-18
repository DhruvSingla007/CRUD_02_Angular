import { Component, OnInit } from '@angular/core';
import {Employee} from "../../models/Employee/employee";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[] = []
  constructor(private _employeeService : EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this._employeeService.getAllEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    this._router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this._employeeService.deleteEmployeeById(id).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log("ERROR WHILE DELETING EMPLOYEE");
    }, () => {
      this.getAllEmployees();
    });
  }

  viewEmployee(id: number) {
    this._router.navigate(['employee', id]);
  }

}
