import { Component, OnInit } from '@angular/core';
import {Employee} from "../../models/Employee/employee";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
  }

  onCreateEmployeeSubmit(){
    this._employeeService.createEmployee(this.employee).subscribe((employee) => {
      console.log(employee);
    }, (error) => {
      console.log("Error occurred");
    }, () => {
      this._router.navigate(['/employees']);
    });
  }

}
