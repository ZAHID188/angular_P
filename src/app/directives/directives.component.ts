import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isSpecial=true;


  currentClass={};
  CurrentStyle={};
  name='Zahid';

  
  constructor() { }

  ngOnInit(): void {
    this.setCurrentClass();
    this.setCurrentStyle();
  }

  setCurrentClass(){
    this.currentClass={
      saveable:true,
      modified:false,
      special:true
    }
   
  }

  setCurrentStyle(){
    this.CurrentStyle={
        'font-style':'italic',
        'background-color':'green'
    }
  }

// structural directive 
  isactive=false;

  items=[
    {name:'zahid'},
    {name:'Rofiq'},
    {name:'Shofiq'},
    {name:'Monika'},
  ]

  //ngswitch
  item2={name:'shofiq '};
}
