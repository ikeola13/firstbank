import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.css']
})
export class SignupsComponent implements OnInit {
  updateError;
  changed = false;
  updater = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerUser(form: NgForm) {
    // console.log(form.value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
    console.log(form.value);

    if(form.value.username.length <= 0 ){
      this.updateError="Please Ensure Username field has been correctly filled";
    }
    else if (form.value.password.length <=0){
      this.updateError="Please Ensure Password field has been correctly filled";
    }
   else {
      this.changed = true;
    }

  }

  showupdate(){
   this.updater = true;
  }

  hideupdate(){
    this.updater = false;
    this.updateError = "";
  }

}
