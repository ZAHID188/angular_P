import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @Input() DoColor='';

  @HostListener('mouseenter') onMouseEnter(){
    this.Color(this.DoColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.Color('');
  }

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor=this.DoColor;
  }
  private Color(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
