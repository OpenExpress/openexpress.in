import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OpenExpressAppComponent } from './openexpress-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thubnail.component';
import {EventService} from './events/shared/events.service'
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EventDetailsComponent } from './events/events-details/events-details.component';
import { NavBarComponent } from './nav/navbar.component';
import { CreateComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/events-details/event-router-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

@NgModule({
  imports: [ // to add different modules to be imported to this component will be specified here.
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ //if we want to add a component or a directive must add them here  
    OpenExpressAppComponent,
    EventListComponent ,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateComponent,
    Error404Component
  ],
  providers: [
    EventRouteActivator,
    EventService,
    ToastrService,
    {
      provide:'canDeactivateCreateEvent', 
      useValue:checkDirtyState
    },
    EventListResolver
    
  ],//services should be added here
  bootstrap: [OpenExpressAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateComponent)
{
if(component.isDirty)
  return window.confirm( `You have not saved this event, do you really want to cancel?`)
return true;
}