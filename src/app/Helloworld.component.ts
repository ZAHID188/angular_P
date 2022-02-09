import { Component } from "@angular/core";
@Component({
    selector:'app-hello',
    template:'<h1> ggg nn{{title}}</h1>',
    styles:[`
    h1{
        color:blue;
    } `]

})
export class helloworldComponent{   
    title:'hello world'
}