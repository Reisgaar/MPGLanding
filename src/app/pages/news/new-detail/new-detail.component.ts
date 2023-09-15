import { AfterViewInit, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { news } from 'src/app/constants/news';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class NewDetailComponent implements OnInit, AfterViewInit {
  orNew: any;
  newId: number;
  maxNews: number;
  url: string = '';
  threeNews: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    try {
      this.activatedRoute.queryParams.subscribe( (params: any) => {
        console.log('params id');
        console.log(params.id);
        this.newId = parseInt(params.id);
        this.orNew = news[this.newId];
        this.url = 'localhost.com/newDetails?id=' + this.newId;
        this.maxNews = news.length - 1;
        this.getThreeNews();
      });
    } catch (error: any) {
      this.router.navigate(['/news']);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (window.innerWidth > 991) {
      this.setTopForOtherNews();
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setTopForOtherNews();
  }

  getThreeNews(): void {
    this.threeNews = [];
    const array = news.slice(0);
    array.reverse();
    for (let n of array) {
      if (n.en.id !== this.newId) {
        this.threeNews.push(n);
      }
      if (this.threeNews.length > 2) { break; }
    }
    console.log(this.threeNews);
  }

  setTopForOtherNews(): void {
    const el = document.getElementById('more-news');
    const top = window.innerHeight - el.offsetHeight;
    el.style.top = top + 'px';
  }

  copyTextToClipboard(): void {
    navigator.clipboard.writeText(this.url);
  }

  sanitize(code: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(code);
  }

  calcReadTime(text: string): number {
    const wordsPerMinute = 120; // Average case.
    let textLength = text.split(" ").length; // Split by words
    if (textLength > 0){
      let value = Math.ceil(textLength / wordsPerMinute);
      return value;
    } else {
      return 0;
    }
  };

  /**
   * Prevents scroll on mousedown
   * @param {any} event : event of mousedown
   */
  preventScroll(event: any): void {
    if (event.button === 1) {
      event.preventDefault();
    }
  }

  /**
   * Opens detail of the new on click
   */
  async clickToDetail(newId: number): Promise<void> {
    this.router.navigate(['/newDetails'], {queryParams: {id: newId}});
  }

  /**
   * Opens detail of the new on a new tab on wheel click
   */
  async wheelToDetail(event: any, newId: number): Promise<void> {
    event.preventDefault();
    if (event.button === 1) {
      const url = this.router.serializeUrl(
        this.router.createUrlTree(['/newDetails'], {queryParams: {id: newId}})
      );
      window.open(url, '_blank');
    }
  }

}
