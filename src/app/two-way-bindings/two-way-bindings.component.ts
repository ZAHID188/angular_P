import { Component,  OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way-bindings',
  templateUrl: './two-way-bindings.component.html',
  styleUrls: ['./two-way-bindings.component.css']
})
export class TwoWayBindingsComponent implements OnInit {


  @Input() size: number;
  @Output() sizeChange =new EventEmitter<number>(); 

  constructor() { }

  ngOnInit(): void {
  }

  dec(){
      this.resize(-1);
  }

  inc(){
    this.resize(+1);
  }
  
    resize(d:number){
      this.size=Math.min(40,Math.max(8,+this.size + d));
      this.sizeChange.emit(this.size);

    }

}
