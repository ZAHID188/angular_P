import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-udemy-forms-less',
  templateUrl: './udemy-forms-less.component.html',
  styleUrls: ['./udemy-forms-less.component.css']
})
export class UdemyFormsLessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm){
console.log(form)
  }

}
