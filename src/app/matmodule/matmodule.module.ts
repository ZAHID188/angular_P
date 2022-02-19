import { NgModule } from '@angular/core';
import { MaterialmoduleModule } from '../materialmodule.module';
import { MatmoduleComponent } from './matmodule.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [MatmoduleComponent],
  imports: [
    MatMenuModule
    
  ],
  exports:[MatmoduleComponent]
})
export class MatmoduleModule { }
