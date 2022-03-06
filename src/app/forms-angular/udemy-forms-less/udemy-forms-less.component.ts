import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-udemy-forms-less',
  templateUrl: './udemy-forms-less.component.html',
  styleUrls: ['./udemy-forms-less.component.css'],
})
export class UdemyFormsLessComponent implements OnInit {
  @ViewChild('f') signUpform: NgForm;

  ngmodelprop = 'zahid';
  ans = '';

  // using Form Data
  Submitted = false;
  User = {
    username: '',
    email: '',
    secretQuestion: '',

    gender: '',
  };

  constructor() {}

  ngOnInit(): void {}

  OnSubmit(form: NgForm) {  
    // console.log(form)

    // using Form Data
    this.Submitted = true;
    this.User.username = form.value.userData.username; //form or signupform both is okay.
    this.User.email = this.signUpform.value.userData.email;
    this.User.secretQuestion = this.signUpform.value.secret;
    this.User.gender = this.signUpform.value.gender;

    this.signUpform.reset();
    // form.reset();  - it's also ok
  }

  // handling radio button
  genders = ['male', 'female'];

  //setting and patching from values
  suggestUserName() {
    const suggestUserName = 'Super User';
    // method 1
    // this.signUpform.setValue({
    //   userData:{
    //     username:suggestUserName,
    //     email:'asd@gmail.com',
    //   },
    //   secret:'pet',
    //   gender:'female'

    // method 2  -- don't change other inputs
    this.signUpform.form.patchValue({
      userData: {
        username: suggestUserName,
      },
      secret: 'pet',
      gender: 'female',
    });
  }


//assignment 
subscriptions=['Basic','Advanced','Pro'];
selectedSub='Advanced';  // must have to match with the subscriptons values
@ViewChild ('assignmentForm') formtemp:NgForm;
onSubmit123(){
console.log(this.formtemp.value);
}

}
