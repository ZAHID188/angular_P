import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-viewchild',
  templateUrl: './child-viewchild.component.html',
  styleUrls: ['./child-viewchild.component.css']
})
export class ChildViewchildComponent implements OnInit {
  messege : 'Messege from Child!';

  constructor() { }

  ngOnInit(): void {
  }

}
