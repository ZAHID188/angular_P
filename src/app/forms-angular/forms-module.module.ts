import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsAngularComponent } from './forms-angular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FccFormComponent } from './fcc-form/fcc-form.component';

let component=[
  FormsAngularComponent,FccFormComponent
]

@NgModule({
  declarations: component,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:component
})
export class FormsModuleModule { }
