import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { news } from 'src/app/constants/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  lastNew: any;
  allNews: any[];
  currentPage: number = 0;
  pageSize: number = 4;
  totalPages: number;

  constructor(
    private router: Router
  ) {
    this.lastNew = news[news.length - 1]
    this.allNews = news.slice(0, news.length - 1);
    this.allNews.reverse();
    console.log(this.allNews);
    console.log(news);
  }

  ngOnInit(): void {
    this.setTotalPages();
  }

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

  /**
   * Pagination
   */
  changePage(isNext: boolean): void {
    let movement = 1;
    if (!isNext) { movement = -1; }
    this.currentPage += movement;
  }

  /**
   * Set the total page amount
   */
  setTotalPages(): void {
    this.totalPages = Math.ceil(this.allNews.length / this.pageSize) - 1;
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

}
