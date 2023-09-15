import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Components
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GameBlockComponent } from './pages/home/game-block/game-block.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { CookiesComponent } from './pages/legal/cookies/cookies.component';
import { PrivacyComponent } from './pages/legal/privacy/privacy.component';
import { LegalAdviceComponent } from './pages/legal/legal-advice/legal-advice.component';
import { ManifestComponent } from './pages/manifest/manifest.component';
import { NewsComponent } from './pages/news/news.component';
import { NewDetailComponent } from './pages/news/new-detail/new-detail.component';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    GameBlockComponent,
    HeaderComponent,
    UnderConstructionComponent,
    CookiesComponent,
    PrivacyComponent,
    LegalAdviceComponent,
    ManifestComponent,
    NewsComponent,
    NewDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientJsonpModule,
    TranslateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    MatFormFieldModule,
    MatDialogModule
],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
