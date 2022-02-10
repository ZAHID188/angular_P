import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { DirectivesComponent } from "../directives/directives.component";
import { RoutingChildAComponent } from "../routing-child-a/routing-child-a.component";
import { RoutingChildBComponent } from "../routing-child-b/routing-child-b.component";
import { RoutingFirstComponent } from "../routing-first/routing-first.component";
import { RoutingSecondComponent } from "../routing-second/routing-second.component";
import { YourGuardGuard } from "./your-guard.guard";


const routess: Routes=[
    {
        path:'first-component/:id', component: RoutingFirstComponent,
        children:[
            {
                path:'child-a', component: RoutingChildAComponent
            },
            {
                path:'child-b', component: RoutingChildBComponent
            }
        ]
        
    },
    {
        path:'second-component', component: RoutingSecondComponent ,canActivate:[YourGuardGuard]
    },
    {
        path:'3rd-component', component: DirectivesComponent
    },
    {
        path:'**', component: RoutingFirstComponent 
    },

];
@NgModule({
    imports:[RouterModule.forRoot(routess)],
    exports:[RouterModule]

})
export class AppRoutingModule2{}