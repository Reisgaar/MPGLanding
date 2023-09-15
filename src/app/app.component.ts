import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';
import { metaSEO } from './constants/meta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maniacPandaLanding';
  url = '';
  urlSubscription: any = this.router.events
  .pipe(
    filter(event => event instanceof NavigationStart),
    map(event => event as NavigationStart),  // appease typescript
  )
  .subscribe( event => {
    if (event.url === '/') {
      this.url = 'home';
    } else {
      this.url = event.url.substring(1);
    }
    this.updateMeta();
  });
  selectedLanguage: string = '';

  // Meta tags
  metaTags = {
    en: metaSEO['en']['home'],
    es: metaSEO['es']['home']
  };

  constructor(
    public translate: TranslateService,
    private router: Router,
    private metaTagService: Meta
  ){
    // Register translation languages
    translate.addLangs(['en', 'es']);

    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      // Set default language
      translate.setDefaultLang(selectedLanguage);
    } else {
      // Set default language
      translate.setDefaultLang('en');
    }
  }

  /**
   * Subscribe to language changes and set SEO tags
   */
  ngOnInit(): void {
    this.selectedLanguage = this.translate.getDefaultLang().toLowerCase();
    this.translate.onLangChange.subscribe( res => {
      this.selectedLanguage = res.lang.toLowerCase();
      this.updateMeta();
    });
  }

  /**
   * Update SEO meta data
   */
  updateMeta(): void {
    try {
      this.metaTagService.updateTag({ name: 'keywords', content: metaSEO[this.selectedLanguage][this.url].keywords });
      this.metaTagService.updateTag({ name: 'description', content: metaSEO[this.selectedLanguage][this.url].description });
      this.metaTagService.updateTag({ name: 'title', content: metaSEO[this.selectedLanguage][this.url].title });
    } catch (error) {
      console.log(error);
    }
  }
}
