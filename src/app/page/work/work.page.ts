import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
})
export class WorkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  protected createdApp = [
    {
      title: 'Angular',
      description:
        'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
      title: 'Angular',
      description:
        'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
      title: 'Angular',
      description:
        'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
  ];
}
