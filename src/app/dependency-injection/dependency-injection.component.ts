import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {

  constructor(
    private log:LogService,
    private rnd:Renderer2,
    private host:ElementRef) { }

  ngOnInit(): void {
    this.log.logMessage("Hellow how are you");
    this.rnd.setStyle(this.host.nativeElement,'color','red');
  }

}
