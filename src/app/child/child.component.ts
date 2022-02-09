import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() messegeEvent=new EventEmitter<string>();

  @Input() childMessege:string;
  constructor() { }

  ngOnInit(): void {
  }

  sendMessege(){
    this.messegeEvent.emit("Hello this is from the child");
  }

}
