import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Title],
})
export class AppComponent {
  constructor(private router: Router, private title: Title) {
    this.title.setTitle('My-Site');
  }
}
