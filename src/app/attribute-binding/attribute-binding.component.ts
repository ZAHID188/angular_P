import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {
  OnSale=true;
  width='10px';
  color='red';

  constructor() { }

  ngOnInit(): void {
  }

}
