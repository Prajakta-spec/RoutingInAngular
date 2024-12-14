import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any = {
    emailId: '',
    password: ''
  }
router = inject(Router)
http = inject(HttpClient)

onLogin () {
  debugger;
  this.http.get("http://localhost:3000/login"/*,this.userObj*/).subscribe((res:any)=>{
   if(res.success) {
    alert("login successful");
    localStorage.setItem('loginUser', JSON.stringify(res))
    this.router.navigateByUrl('add-employee')
   }else {
    debugger;
    alert(res.message)
    alert('Enter valid user name')
   }
  });
}

  // userObj: any = {
  //   userName: '',
  //   password: ''
  // }


  // onLogin() {
  //   //her we are going static login that means we are going to check hardcode
  //   debugger;
  //   if(this.userObj.userName == "admin" && this.userObj.password == "1234") {
  //     debugger;
  //     alert("login successful");
  //     localStorage.setItem('loginUser', this.userObj.userName)
  //     this.router.navigateByUrl('add-employee')
  //   }else {
  //     alert('wrong credentials')
  //   }

  // }
}
