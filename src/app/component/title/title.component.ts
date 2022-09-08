import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-component',
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() url?: string;
  @Input() color?: string;
  @Input() routerLink?: string;
  @Output() textColor = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  protected handleWindowOpen(): void {
    if (this.url) {
      window.open(this.url);
    } else {
      this.router.navigate([this.routerLink]);
    }
  }
}
