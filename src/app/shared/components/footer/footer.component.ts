import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/constants/games';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  games = games;

  constructor() { }

  ngOnInit(): void {
  }

}
