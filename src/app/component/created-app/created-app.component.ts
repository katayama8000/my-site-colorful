import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-created-app-component',
  templateUrl: './created-app.component.html',
})
export class CreatedAppComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  constructor() {}

  ngOnInit(): void {}
}
