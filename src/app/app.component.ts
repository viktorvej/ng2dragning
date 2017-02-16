import { Component } from '@angular/core';

@Component({
  selector: 'my-imdb-app',
  template: `
    <my-imdb-nav></my-imdb-nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 

}
