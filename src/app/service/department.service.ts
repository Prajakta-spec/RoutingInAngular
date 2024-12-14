import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  getAllDepartment() {
    return this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment");
  }

  createDepartment(obj:any) {
    return this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/UpdateDepartment",obj);
  }

  updateDepartment(obj:any) {
    return this.http.put("https://projectapi.gerasim.in/api/EmployeeManagement/UpdateDepartment",obj);
  }

  deleteDepartment(id:number) {
    return this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+id);
  }
}
