import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  first = true;
  second = false;

  third = false;

  fourth = false;
  fifth = false;

  error ;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  firstdiv(){
    this.first = true;
    this.second = false;
  
    this.third = false;
    this.fourth = false;
    this.fifth = false;
  }

  seconddiv(){
    this.first = false;
    this.second = true;
  
    this.third = false;
    this.fourth = false;
    this.fifth = false;
  }

  thirddiv(){
    this.first = false;
    this.second = false;
  
    this.third = true;
    this.fourth = false;
    this.fifth = false;
  }


  fourthdiv(){
    this.first = false;
    this.second = false;
  
    this.third = false;
    this.fourth = true;
    this.fifth = false;
  }
 fifthdiv(){
  this.first = false;
  this.second = false;

  this.third = false;
  this.fourth = false;
  this.fifth = true;
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
  this.first = false;
  this.second = false;

  this.third = false;
  this.fourth = false;
  this.fifth = true;
  }

}

}
