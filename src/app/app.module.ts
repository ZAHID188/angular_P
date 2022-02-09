import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product-list/product-list.component';
import { helloworldComponent } from './Helloworld.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentViewchildComponent } from './parent-viewchild/parent-viewchild.component';
import { ChildViewchildComponent } from './child-viewchild/child-viewchild.component';
import { ParentNgcontentComponent } from './parent-ngcontent/parent-ngcontent.component';
import { ChildNgcontentComponent } from './child-ngcontent/child-ngcontent.component';
import { TemplateStatementsComponent } from './template-statements/template-statements.component';
import { PipesComponent } from './pipes/pipes.component';
import { GreetingsPipePipe } from './greetings-pipe.pipe';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent, 
    helloworldComponent, ParentComponent, ChildComponent,
     ParentViewchildComponent, 
    ChildViewchildComponent, ParentNgcontentComponent, ChildNgcontentComponent,
     TemplateStatementsComponent, PipesComponent, GreetingsPipePipe, PropertyBindingComponent  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
