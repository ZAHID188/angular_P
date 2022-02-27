import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MattableComponent } from './mattable.component';


let comp=[MattableComponent];

@NgModule({
  declarations: comp,
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports:comp
})
export class MattableModules { }
