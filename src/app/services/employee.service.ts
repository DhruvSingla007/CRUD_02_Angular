import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/Employee/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL: string = "http://localhost:8080/api";

  private headers = new HttpHeaders({Authorization: 'Basic ' + btoa('dhruv' + ':' + 'dhruv')});

  constructor(private _httpClient: HttpClient) {
  }

  getAllEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(`${this.baseURL}` + '/employees', { 'headers': this.headers });
  }

  createEmployee(employee: Employee) : Observable<Employee> {
    return this._httpClient.post<Employee>(`${this.baseURL}` + '/createEmployee', employee, { 'headers': this.headers });
  }

  getEmployeeById(id: number) : Observable<Employee> {
    return this._httpClient.get<Employee>(`${this.baseURL}` + '/employee/' + id.toString(), { 'headers': this.headers });
  }

  deleteEmployeeById(id: number) : Observable<Object>{
    return this._httpClient.delete(`${this.baseURL}` + '/deleteEmployee/' + id.toString(), { 'headers': this.headers });
  }

  updateEmployeeById(id: number, employee: Employee) : Observable<Employee> {
  return this._httpClient.put<Employee>(`${this.baseURL}` + '/updateEmployeeById/' + id.toString(), employee, {'headers': this.headers});
  }
}
