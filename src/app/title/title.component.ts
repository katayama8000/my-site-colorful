import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() url?: string;
  @Input() color?: string;
  @Input() routerLink?: string;

  constructor() {}

  ngOnInit(): void {}

  protected handleWindowOpen(): void {
    if (this.url) {
      window.open(this.url);
    } else {
      //alert('URLが設定されていません');
    }
  }
}
