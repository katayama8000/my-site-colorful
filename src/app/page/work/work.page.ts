import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
})
export class WorkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  protected createdApp: {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }[] = [
    {
      title: 'invoice',
      description:
        'This is a simple invoice application. You can create, edit, and delete invoices. You can also export invoices to PDF format.',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      link: 'https://invoice-app-d6e30.web.app/',
    },
    {
      title: 'memory with music',
      description:
        'This is a simple memory game. You can play the game with music. You can also change the music.',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      link: 'https://memory-with-music.vercel.app/',
    },
    {
      title: 'snake game',
      description:
        'snake game. I hope You can enjoy it. I hope you can enjoy it.',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      link: 'https://snake-game-react-pgp9dpqo3-katayama8000.vercel.app/',
    },
  ];

  protected handleWindowOpen(url: string) {
    window.open(url);
  }
}
