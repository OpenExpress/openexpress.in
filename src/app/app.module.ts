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
    NavBarComponent
  ],
  providers: [
    EventService,
    ToastrService
  ],//services should be added here
  bootstrap: [OpenExpressAppComponent]
})
export class AppModule { }
