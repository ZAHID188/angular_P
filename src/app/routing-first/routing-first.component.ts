import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-first',
  templateUrl: './routing-first.component.html',
  styleUrls: ['./routing-first.component.css']
})
export class RoutingFirstComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    alert(this.route.snapshot.paramMap.get('id'));
  }

}
