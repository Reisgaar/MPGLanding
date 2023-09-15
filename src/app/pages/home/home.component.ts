import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/constants/games';

/**
 * The home page
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games = games;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Change the shown block scrolling to given block
   * @param changeTo the id of the block to change to
   */
  changeActualBlock(changeTo: string): void {
    const element = document.getElementById(changeTo);
    if (changeTo === 'home') {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
    } else {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  /**
   * Change the shown block scrolling to given block
   * @param changeTo the id of the block to change to
   */
  toNextBlock(game: string): void {
    const pos = games.findIndex(e => e.folder === game);
    const changeTo = games[pos].folder;
    const element = document.getElementById(changeTo);
    if (changeTo === 'home') {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
    } else {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

}
