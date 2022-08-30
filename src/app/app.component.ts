import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  color: string = `text-[#DE1618]`;
  circleColor: string = `bg-[#DE1618]`;
  bgColor: string = `bg-[#352E95]`;

  constructor() {}

  protected titles: {
    title: string;
    description: string;
    url?: string;
    color?: string;
  }[] = [
    { title: 'About', description: 'Brief introduction about me' },
    {
      title: 'Note',
      description: 'Anything blog',
      url: 'https://note.com/with_wife',
    },
    {
      title: 'Qiita',
      description: 'Teck blog',
      url: 'https://qiita.com/t_109609akg',
    },
    {
      title: 'Zenn',
      description: 'Teck blog',
      url: 'https://zenn.dev/tattu',
    },
    { title: 'Works', description: 'What I have build' },
    {
      title: 'Git hub',
      description: 'I try to write code everyday',
      url: 'https://github.com/katayama8000',
    },
    {
      title: 'My Comunity',
      description: 'I created a community on LINE',
      url: 'https://line.me/ti/g2/qe5B4jkfc1Uf1IxhB1DsgSD6-ez5aSAlGEEpTg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default',
    },
    {
      title: 'Contact',
      description: 'Contact me on Twitter',
      url: 'https://twitter.com/IT_gorilla_',
    },
  ];

  handleChangeColor(color: string, circleColor: string, bgColor: string): void {
    console.log(this.color, this.circleColor, this.bgColor);
    // this.color = `text-[${color}]`;
    // this.circleColor = `bg-[${color}]`;
    // this.bgColor = `bg-[${bgColor}]`;
    console.log(this.color, this.circleColor, this.bgColor);
    this.color = color;
    this.circleColor = circleColor;
    this.bgColor = bgColor;
  }
}
