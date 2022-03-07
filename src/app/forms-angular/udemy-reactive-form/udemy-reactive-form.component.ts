import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-udemy-reactive-form',
  templateUrl: './udemy-reactive-form.component.html',
  styleUrls: ['./udemy-reactive-form.component.css']
})
export class UdemyReactiveFormComponent implements OnInit {

  genders=['male','female'];

  // Reactaive form making
  signUpForm:FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.signUpForm=new FormGroup({   //In the curly brace we need to input a javascript object
      'username':new FormControl(null,Validators.required), 
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('female')

    });
  }

  OnSubmit(){
    console.log(this.signUpForm)
  }

}
