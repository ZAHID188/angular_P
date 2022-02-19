import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';

const matcomponents=[
  MatSliderModule,
  MatMenuModule ,
  MatToolbarModule,
  MatSidenavModule,
  FormsModule
  
]

@NgModule({
  imports: [matcomponents],
  exports: [matcomponents]
})
export class MaterialmoduleModule { }
