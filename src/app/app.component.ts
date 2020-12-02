import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `      
      <app-header></app-header>
      <app-menu></app-menu>

      <router-outlet></router-outlet>
      
      <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent{
  constructor(private http: HttpClient) {}

}
