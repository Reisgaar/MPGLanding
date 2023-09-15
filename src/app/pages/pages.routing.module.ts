import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CookiesComponent } from './legal/cookies/cookies.component';
import { LegalAdviceComponent } from './legal/legal-advice/legal-advice.component';
import { PrivacyComponent } from './legal/privacy/privacy.component';
import { ManifestComponent } from './manifest/manifest.component';
import { PagesComponent } from './pages.component';
import { TeamComponent } from './team/team.component';
import { NewsComponent } from './news/news.component';
import { NewDetailComponent } from './news/new-detail/new-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'newDetails',
        component: NewDetailComponent
      },
      {
        path: 'manifest',
        component: ManifestComponent
      },
      // {
      //   path: 'contact',
      //   component: ContactComponent
      // },
      {
        path: 'cookies-policy',
        component: CookiesComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyComponent
      },
      {
        path: 'legal-notice',
        component: LegalAdviceComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
