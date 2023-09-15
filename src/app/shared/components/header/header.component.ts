import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuIsVisible: boolean = false;
  actualRoute: string = '';
  actualLanguage: string;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.actualRoute = this.router.url;
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      this.actualLanguage = selectedLanguage;
    } else {
      this.actualLanguage = 'en';
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        this.actualRoute = val.url;
      }
    });
  }

  switchMenu(): void {
    this.menuIsVisible = !this.menuIsVisible;
  }

  closeMenu(): void {
    this.menuIsVisible = false;
  }

  changeLanguage(): void {
    if (this.actualLanguage === 'es') {
      this.actualLanguage = 'en';
      this.translate.use('en');
      localStorage.setItem('selectedLanguage', 'en');
    } else if (this.actualLanguage === 'en') {
      this.actualLanguage = 'es';
      this.translate.use('es');
      localStorage.setItem('selectedLanguage', 'es');
    }
  }

}
