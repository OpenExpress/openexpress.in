import { EventDetailsComponent } from "./events/events-details/events-details.component";
import { EventListComponent } from "./events/events-list.component";
import { Routes } from '@angular/router' 
export const appRoutes:Routes = [
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '',redirectTo: '/events', pathMatch: 'full' }
]