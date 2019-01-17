
import { EventDetailsComponent } from "./events/events-details/events-details.component";
import { EventListComponent } from "./events/events-list.component";
import { Routes } from '@angular/router' 
import { CreateComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/events-details/event-router-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";
export const appRoutes:Routes = [
    { path: 'events/new', component: CreateComponent,  canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventListComponent, resolve: {events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    {path: '404' , component: Error404Component},
    { path: '',redirectTo: '/events', pathMatch: 'full' },
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]