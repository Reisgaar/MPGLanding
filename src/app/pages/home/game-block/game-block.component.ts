import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { games } from 'src/app/constants/games';

/**
 * Component to show the game information on a 100% viewport
 * Needs inputs with game info (game.ts constant file) and align (left or right)
 */
@Component({
  selector: 'app-game-block',
  templateUrl: './game-block.component.html',
  styleUrls: ['./game-block.component.scss']
})
export class GameBlockComponent implements OnInit {
  @Input() game: any;
  @Input() align: string;
  selectedLanguage: string;
  games = games;

  constructor(
    private translate: TranslateService
  ) { }

  /**
   * Listen scroll events to manage parallax effect
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const actualGame = window.scrollY / window.innerHeight;
    this.setImagePositionWithScrolling(actualGame);
  }

  /**
   * Subscribe to language changes
   */
  ngOnInit(): void {
    this.selectedLanguage = this.translate.getDefaultLang().toUpperCase();
    this.translate.onLangChange.subscribe( res => {
      this.selectedLanguage = res.lang.toUpperCase();
    });
  }

  /**
   * Sets the Y transformation of the 3 shown elements (previous, actual and next) for parallax effect
   * @param gameScroll the game (number) that is starting to appear
   */
  setImagePositionWithScrolling(gameScroll: number): void {
    let device = 'Desktop';
    if (window.innerWidth < 768) {
      device = 'Mobile';
    }
    try {
      const game = Math.floor(gameScroll);
      const percent = (gameScroll - game) * 10;
      if (this.games[game - 1]) {
        this.transformElementTranslateY(this.games[game - 1].folder + '_image' + device, (10 + percent));
        this.transformElementTranslateY(this.games[game - 1].folder + '_logo' + device, (10 - (10 + percent)));
      }
      if (this.games[game]) {
        this.transformElementTranslateY(this.games[game].folder + '_image' + device, percent);
        this.transformElementTranslateY(this.games[game].folder + '_logo' + device, (10 - percent));
      }
      if (this.games[game + 1]) {
        this.transformElementTranslateY(this.games[game + 1].folder + '_image' + device, (10 + (10 - percent)));
        this.transformElementTranslateY(this.games[game + 1].folder + '_logo' + device, (10 - (10 + (10 - percent))));
      }
    } catch (error) {}
  }

  /**
   * Sets the transform translateY of given element
   * @param elementId the id of the element to transform
   * @param transformation the percentage of transformation amount
   */
  transformElementTranslateY(elementId: string, transformation: number): void {
    const prev = document.getElementById(elementId) as HTMLElement;
    prev.style.transform = 'translateY(' + transformation + '%)';
  }

}
