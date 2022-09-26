import { Component, OnInit } from '@angular/core';
import { meta } from './../../meta/meta';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomeComponent implements OnInit {
  color: string = `text-[#f9d716]`;
  circleColor: string = `bg-[#f9d716]`;
  bgColor: string = `bg-[#0058a3]`;

  constructor(private meta: Meta) {}
  ngOnInit(): void {
    this.meta.addTag(meta);
  }

  protected titles: {
    title: string;
    description: string;
    url?: string;
    color?: string;
    routerLink?: string;
  }[] = [
    {
      title: 'About',
      description: 'Brief introduction about me',
      //routerLink: 'aboutme',
      url: 'https://my-site-steel-psi.vercel.app/about',
    },
    {
      title: 'Works',
      description: 'What I have build',
      //routerLink: 'work',
      url: 'https://my-site-steel-psi.vercel.app/works',
    },
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
    this.color = color;
    this.circleColor = circleColor;
    this.bgColor = bgColor;
  }

  handleReset() {
    this.color = `text-[#DE1618]`;
    this.circleColor = `bg-[#DE1618]`;
    this.bgColor = `bg-[#352E95]`;
  }
}
