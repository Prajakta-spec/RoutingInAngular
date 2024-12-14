import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from "../../../resusableComponent/alert/alert.component";


@Component({
  selector: 'app-get-api',
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  alertMsg : string = ''

  changeMsg() {
    this.alertMsg ='Thihij'
  }

 // http =inject(HttpClient); this is aslo way to create object using inject

 //this is beacuse we are getting result in the form too many users list so we are using array
userList: any [] = [];
customerList: any[] =[];

  constructor(private http:HttpClient) {

    this.getAllUser();
  }

  getAllUser() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.userList = res;

    });
  }

  getAllCustomers() {
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result:any)=>{
      debugger;
        this.customerList = result.data;
    }, error=>{
      debugger;
      alert("Something is worng");

    });
  }

}
