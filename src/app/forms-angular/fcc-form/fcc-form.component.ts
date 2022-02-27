import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pet } from './pet.model';


@Component({
  selector: 'app-fcc-form',
  templateUrl: './fcc-form.component.html',
  styleUrls: ['./fcc-form.component.css']
})
export class FccFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  species=['fish','cat','dog'];
  model=new pet(1,"goldie",this.species[1]);

  submitted=false;

  onSubmit(){
      this.submitted=true;
  }

  name=new FormControl('');

  UpdateName(){
    this.name.setValue('zahid');
  }


      // formgroup 
      profileitem=new FormGroup({
        FirstName: new FormControl(''),
        LastName: new FormControl(''),

      })
  
      onsubmit2(){
        console.warn(this.profileitem.value); 
      }


            // Form validation 
      nameInput='';

      FormValidation=new FormGroup({
        Name: new FormControl(
          this.nameInput,
          [Validators.required,Validators.minLength(5)]
        )
        

      })

}
