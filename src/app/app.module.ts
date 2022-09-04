import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//components
import { TitleComponent } from './component/title/title.component';
//pages
import { WorkComponent } from './page/work/work.component';
import { HomeComponent } from './page/home/home.component';
import { AnimationComponent } from './page/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    WorkComponent,
    HomeComponent,
    AnimationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
