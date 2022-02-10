import { Directive,ElementRef,HostListener,Input } from "@angular/core";

@Directive({    
    selector:'[appAttributeDirective]',
    
}) 
export class AttributeDirective{

// @Input() doColor= '';


@HostListener('mouseenter') onMouseEnter(){
    this.action("red");  
}
@HostListener('mouseleave') onMouseLeave(){
    this.action('');    
}
    constructor(private el:ElementRef){
        el.nativeElement.style.backgroundColor="";
       

    }

private action(color:string){
    this.el.nativeElement.style.backgroundColor=color;  
}

}