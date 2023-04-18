import { Component, OnInit } from '@angular/core';
import {Employee} from "../../models/Employee/employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee;
  employeeId: number;

  constructor(private _employeeService: EmployeeService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this._activatedRoute.snapshot.params['id'];
    this.getEmployeeById(this.employeeId);
  }

  getEmployeeById(id: number) {
    this._employeeService.getEmployeeById(id).subscribe((employee) => {
      this.employee = employee;
    }, (error) => {
      console.log("ERROR OCCURRED WHILE FETCHING THE EMPLOYEE DETAILS");
    });
  }

  onUpdateEmployeeSubmit() {
    this._employeeService.updateEmployeeById(this.employeeId, this.employee).subscribe((employee) => {
      console.log(`EMPLOYEE WITH ID ${this.employeeId} UPDATED`);
    }, (error) => {
      console.log("ERROR OCCURRED WHILE UPDATING THE EMPLOYEE DETAILS");
    }, () => {
      this._router.navigate(['employees']);
    });
  }

}
