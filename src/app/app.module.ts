import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingsComponent } from './two-way-bindings/two-way-bindings.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { AttributeDirective } from './directives/Attribute.directive';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { LogService } from './dependency-injection/log.service';
import { RoutingComponent } from './routing/routing.component';
import { RoutingFirstComponent } from './routing-first/routing-first.component';
import { RoutingSecondComponent } from './routing-second/routing-second.component';
import { AppRoutingModule2 } from './routing/routing.module';
import { RoutingChildAComponent } from './routing-child-a/routing-child-a.component';
import { RoutingChildBComponent } from './routing-child-b/routing-child-b.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import {HttpClientModule} from '@angular/common/http';
import { MatmoduleComponent } from './matmodule/matmodule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatmoduleModule } from './matmodule/matmodule.module';
import { MattableComponent } from './mattable/mattable.component';
import { MattableModules } from './mattable/mattable.module';
import { FormsModuleModule } from './forms-angular/forms-module.module';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent, 
    helloworldComponent, ParentComponent, ChildComponent,
     ParentViewchildComponent, 
    ChildViewchildComponent, ParentNgcontentComponent, ChildNgcontentComponent,
    TemplateStatementsComponent, PipesComponent, GreetingsPipePipe,
    PropertyBindingComponent, AttributeBindingComponent,
    EventBindingComponent, TwoWayBindingsComponent, 
    TemplateVariablesComponent, 
    DirectivesComponent,AttributeDirective, CustomDirectiveDirective,
     DependencyInjectionComponent, 
     RoutingComponent, RoutingFirstComponent, 
     RoutingSecondComponent, RoutingChildAComponent, 
     RoutingChildBComponent, HttpclientComponent,
      
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AppRoutingModule2,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatmoduleModule,
    MattableModules,
    FormsModuleModule
    
    
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
