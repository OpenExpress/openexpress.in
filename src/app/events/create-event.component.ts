import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({

    template:`
    <h1>New event</h1>
    <hr>
    <div class="col-md--6"></div>
    <h3>[Create Event Form Will go here]</h3>
    <br/>
    <br/>
    <div>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="buttom" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>

    `

})
export class CreateComponent{
//navigate from code
constructor(private router: Router){

}
    cancel(){
        this.router.navigate(['/events'])
    }


    isDirty:boolean = true;
}