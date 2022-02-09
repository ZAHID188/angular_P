import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { ChildViewchildComponent } from '../child-viewchild/child-viewchild.component';

@Component({
  selector: 'app-parent-viewchild',
  templateUrl: './parent-viewchild.component.html',
  styleUrls: ['./parent-viewchild.component.css']
})
export class ParentViewchildComponent implements OnInit {
// alert("hi this is dhaka");  
  @ViewChild(ChildViewchildComponent) child;
  constructor() { }

  ngOnInit(): void {}
  ngAfterViewInit(){
    // alert(this.child.messege)
    alert(this.child.messege);

  }

}
