import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  @Output() deleteOrder=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  OnSave(){
    console.log('clicked on save');
  }

  deleteAction(){
    this.deleteOrder.emit('item name');
  }


}
