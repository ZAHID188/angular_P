import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';


const matcomponents=[
  MatSliderModule,
  MatMenuModule 
]

@NgModule({
  imports: [matcomponents],
  exports: [matcomponents]
})
export class MaterialmoduleModule { }
