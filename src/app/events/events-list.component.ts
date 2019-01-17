import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';
import {  ActivatedRoute } from '@angular/router';
 

@Component({
  template:`
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
     <div class="col-md-5"  *ngFor ="let event of events"
     (click)="handleThumbnailClick(event.name)">
         <events-thumbnail [event]="event" ></events-thumbnail>
     </div>
    </div>
</div>`,
styles:[
    `.well div {color: red;}`
]
})
export class EventListComponent implements OnInit {
 
    events:any
   //  private eventService: same as declaring and assigning
    constructor(private eventService: EventService,private toastr: ToastrService, private route:ActivatedRoute)
    {
        
    }
 
    ngOnInit()
    {
        this.events=this.route.snapshot.data['events']
    }
    handleThumbnailClick(eventName)
    {
        this.toastr.success(eventName);
    }
    
}