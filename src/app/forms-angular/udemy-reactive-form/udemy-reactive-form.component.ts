import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      
      // 'username':new FormControl(null,Validators.required), 
      // 'email':new FormControl(null,[Validators.required,Validators.email]),
      // 'gender': new FormControl('female')

      // grouping controls
'userData':new FormGroup({
  'username':new FormControl(null,[Validators.required,this.fbname.bind(this)]), 
  'email':new FormControl(null,[Validators.required,Validators.email]),

}),
  
      'gender': new FormControl('female'),
      //arrays of form control

      'hobbies': new FormArray([])


    });
  }

  OnSubmit(){
    console.log(this.signUpForm)
  }

  // arrays of form control  

  onAddHobby(){

    const control =new FormControl(null);
    (<FormArray> this.signUpForm.get('hobbies')).push(control);
  }

  getControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  //Createing custom validators
forbiddenNames=['ana','alex'];

fbname(control:FormControl):{[s:string]:boolean}
{
  if (this.forbiddenNames.indexOf(control.value) !==-1) // checking forbiddennames array have certain elements  that we  are getting from the control parameter here
  {
    return{'nameisForbidden' : true};
    
  }
  return null;
}

}
