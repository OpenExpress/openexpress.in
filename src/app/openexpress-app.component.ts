import { Component } from '@angular/core';


@Component({
  selector: 'openexpress-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  ` 

})
export class OpenExpressAppComponent {
  title = 'openexpress';
}
