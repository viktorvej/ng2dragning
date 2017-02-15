import { Component } from '@angular/core';

@Component({
  selector: 'books-app',
  template: `
    <h1>Hello {{name}}</h1>
    <books></books>
  `,
})
export class AppComponent  { name = 'Books'; }
