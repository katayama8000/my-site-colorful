import { Component, OnInit } from '@angular/core';
import {
  animate,
  trigger,
  state,
  style,
  transition,
} from '@angular/animations';

const fadeInOut = trigger('fadeInOut', [
  state(
    'in',
    style({
      opacity: 1,
    })
  ),
  transition('void => *', [style({ opacity: 0 }), animate('1s ease-out')]),
  transition('* => void', [animate('1s ease-out'), style({ opacity: 0 })]),
]);

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.1s')]),
    ]),
  ],
})
export class AnimationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  color!: string;
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
