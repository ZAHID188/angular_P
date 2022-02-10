import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    title='hello world....!';

    getMin(a: number,b: number){
      if(a<b){
        return a;
      }
      return b;
    }

    deleteThis(item){

        console.log(item)
    }

    fontsizepx=16;
    fontSizepx=20;

  

}




            // lifecycle hook
// export class AppComponent implements OnInit ,OnDestroy{
//   intervalSub:any;
//   ngOnInit() {
//       this.intervalSub=setInterval(()=>
//       {
//         console.log("Hello from ngoninit ");
//       },1000);
//   }
//   ngOnDestroy() {
//     if(this.intervalSub){
//       clearInterval(this.intervalSub);
//     }
      
//   }
// }
