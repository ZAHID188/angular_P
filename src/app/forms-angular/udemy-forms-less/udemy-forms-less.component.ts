import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-udemy-forms-less',
  templateUrl: './udemy-forms-less.component.html',
  styleUrls: ['./udemy-forms-less.component.css']
})
export class UdemyFormsLessComponent implements OnInit {
@ViewChild('f') signUpform:NgForm;

  ngmodelprop="zahid";
  ans='';

  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm){
console.log(form)

  }


  // handling radio button
  genders=['male','female'];

  //setting and patching from values
  suggestUserName(){
    const suggestUserName='Super User'
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
      userData:{
            username:suggestUserName
        
          }
           
    });
   
  }

}
