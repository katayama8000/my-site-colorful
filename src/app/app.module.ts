import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//components
import { TitleComponent } from './component/title/title.component';
//pages
import { WorkComponent } from './page/work/work.page';
import { HomeComponent } from './page/home/home.page';
import { AnimationComponent } from './page/animation/animation.component';
import { AboutMeComponent } from './page/about-me/about-me.page';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { CreatedAppComponent } from './component/created-app/created-app.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.page';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    WorkComponent,
    HomeComponent,
    AnimationComponent,
    AboutMeComponent,
    PageContentComponent,
    CreatedAppComponent,
    PageNotFoundComponent,
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
