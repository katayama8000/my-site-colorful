import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Title], // ［1］Titleサービスを登録
})
export class AppComponent {
  constructor(private router: Router, private title: Title) {
    // ［2］タイトルを設定
    this.title.setTitle('My-Site');
  }
}
