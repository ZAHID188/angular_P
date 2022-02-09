import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-statements',
  templateUrl: './template-statements.component.html',
  styleUrls: ['./template-statements.component.css']
})
export class TemplateStatementsComponent implements OnInit {

  showText= false;
  toggleText(event):void{
    this.showText=!this.showText;
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
