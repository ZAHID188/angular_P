import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {
  firstExample='';
  callPhone(phone:string)
  {
    console.log(phone);
  }

  constructor() { }

  ngOnInit(): void {
  }
  

}
