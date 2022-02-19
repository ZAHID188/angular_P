import { NgModule } from '@angular/core';
import { MaterialmoduleModule } from '../materialmodule.module';
import { MatmoduleComponent } from './matmodule.component';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [MatmoduleComponent, NavbarComponent, SidenavComponent],
  imports: [
    MatMenuModule,
    MaterialmoduleModule
    
  ],
  exports:[MatmoduleComponent,NavbarComponent,SidenavComponent]
})
export class MatmoduleModule { }
