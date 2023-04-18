import { Component, OnInit } from '@angular/core';
import {Employee} from "../../models/Employee/employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  employee: Employee;
  employeeId: number;

  constructor(private _route : ActivatedRoute, private _employeeService: EmployeeService, private _router : Router) { }

  ngOnInit(): void {
    this.employeeId = this._route.snapshot.params['id'];
    this.getEmployeeDetails(this.employeeId);
  }

  getEmployeeDetails(id: number){
    this._employeeService.getEmployeeById(id).subscribe((employee) => {
      this.employee = employee;
    });
  }

  moveToParentRoute() {
    this._router.navigate(['../../employees'], {relativeTo: this._route});
  }

}
