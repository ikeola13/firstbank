import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  registerUser(form: NgForm) {
    // console.log(form.value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
    console.log(form.value);

    if(form.value.email.length <= 0 ){
      this.error="Please Ensure Email field has been correctly filled";
    }
    else if (form.value.password.length <=0){
      this.error="Please Ensure Password field has been correctly filled";
    }
   else {
      this.router.navigateByUrl("/signups");
    }

  }

}
