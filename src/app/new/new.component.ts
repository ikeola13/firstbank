import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  top = true;

  final = false;
  final2 = false;
  step2b = false;

  step2a = false;
  havey = false;
  error ;

  constructor() { }

  ngOnInit() {
  }

  default(){
    this.top = true;
    this.final = false;
    this.step2a = false;
    this.step2b = false;
  this.havey = false;
  this.final2 = false;
  }


  iamcustomer(){
    this.step2a = true;
    this.step2b = false;
  this.havey = false;
  this.final2 = false;


  }
  iusemobile(){
    this.havey = true;
  }
  iamnotcustomer(){
    this.step2b = true;
    this.step2a = false;
  this.havey = false;
  this.final2 = false;


  }
  finally(){
    this.top = false;
    this.final = true;
    this.final2 = false;
    this.step2a = false;
    this.step2b = false;
  this.havey = false;
  }
  finally2(){
    this.top = false;
    this.final = false;
    this.final2 = true;
    this.step2a = false;
    this.step2b = false;
  this.havey = false;
  }


  registerUser(form: NgForm) {
    // console.log(form.value);
    // {email: '...', password: '...'} 
    // ... <-- now use JSON.stringify() to convert form values to json.
    console.log(form.value);
  
  
    if(form.value.fullname.length <= 0 ){
      this.error = "Please Ensure Full Name field has been correctly filled";
    }
    else if (form.value.email.length <=0){
      this.error = "Please Ensure Email Address has been correctly filled";
    }
    else if (form.value.phone.length <=0){
      this.error = "Please Ensure Phone Number has been correctly filled";
    }
    else if (form.value.type.length <= 0 ){
      this.error = "Please Ensure You have Selected An Account Type";
    }
   else {
     this.error = "";
     this.top = false;
    this.final = true;
    this.step2a = false;
    this.step2b = false;
  this.havey = false;
    }
  
  }

}
