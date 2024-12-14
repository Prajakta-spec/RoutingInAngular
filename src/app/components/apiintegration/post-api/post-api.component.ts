import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from "../../../resusableComponent/alert/alert.component";

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, AlertComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  deptList: any []=[];

  constructor(private deptSer : DepartmentService) {

  }
//ngoninit get triggers once the component get intialized successfully
  ngOnInit(): void {
    this.getDepapartment();

  }


  deptObj:any= {

  
      "departmentId": 0,
      "departmentName": "",
      "departmentLogo": ""
  }

  onReset(){
    this.deptObj={
      "departmentId": 0,
      "departmentName": "",
      "departmentLogo": ""
    }
  }

  onEdit(data:any) {
    this.deptObj = data;
  }

 
 
  //here we are going to create instance of httpclient module
  //here we are injecting this injectable service in our component
  http = inject(HttpClient);



// getDepapartment() {
  //   this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment").subscribe((res:any)=>{
  //     this.deptList = res.data;
  //   })
  // }
  getDepapartment() {
    this.deptSer.getAllDepartment().subscribe((res:any)=>{
      this.deptList=res.data;
    })
  }
//post  need two parameters first is url and second is body which nothing but object
  // onSave() {
  //   debugger;
  //   this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
  //     debugger;  
  //     if(res.result) {
  //         alert("Department Created Successfully")
  //         this.getDepapartment();
  //         //here we call this method to save the reult in table
  //       }else{
  //         alert(res.message)
  //       }
  //   })
  // }

  onSave() {
    this.deptSer.createDepartment(this.deptObj).subscribe((res:any)=>{
      if(res.result) {
                alert("Department Created Successfully")
                 this.getDepapartment();
                 //here we call this method to save the reult in table
               }else{
                 alert(res.message)
               }
    })
  }

  

  // onUpdate() {

  //   debugger;
  //   this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/UpdateDepartment",this.deptObj).subscribe((res:any)=>{
  //     debugger;  
  //     if(res.result) {
  //         alert("Department updated Successfully")
  //         this.getDepapartment();
  //         //here we call this method to save the reult in table
  //       }else{
  //         alert(res.message)
  //       }
  //   })
  // }

  onUpdate() {
    this.deptSer.updateDepartment(this.deptObj).subscribe((res:any)=>{
      if(res.result) {
                alert("Department updated Successfully")
                this.getDepapartment();
                //here we call this method to save the reult in table
              }else{
                alert(res.message)
              }
    })
  }


  // onDelete(id: number) {

  //   const isDelete = confirm("are you sure you want to delete this data")
  //   if(isDelete) {
  //   debugger;
  //   this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=>{
  //     debugger;  
  //     if(res.result) {
  //         alert("Department Deleted Successfully")
  //         this.getDepapartment();
  //         //here we call this method to save the reult in table
  //       }else{
  //         alert(res.message)
  //       }
  //   })
  // }

  onDelete(id:number) {
    const isDelete = confirm("are you sure you want to delete this data")
    if(isDelete) {
      this.deptSer.deleteDepartment(id).subscribe(() => {
        this.getDepapartment();
        });
    }else{
      alert("Deletion cancel");
    }
      

  }
  
}
