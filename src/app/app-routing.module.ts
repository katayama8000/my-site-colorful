import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './page/about-me/about-me.page';
import { WorkComponent } from './page/work/work.page';
import { HomeComponent } from './page/home/home.page';
import { AnimationComponent } from './page/animation/animation.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.page';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'animation', component: AnimationComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
