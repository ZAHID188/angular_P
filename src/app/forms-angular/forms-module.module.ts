import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsAngularComponent } from './forms-angular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FccFormComponent } from './fcc-form/fcc-form.component';
import { UdemyFormsLessComponent } from './udemy-forms-less/udemy-forms-less.component';

let component=[
  FormsAngularComponent,FccFormComponent,UdemyFormsLessComponent
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
