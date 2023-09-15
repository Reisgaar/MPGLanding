import { Component, OnInit } from '@angular/core';
import { cs, externals, internals } from 'src/app/constants/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  cs = cs;
  internals = internals;
  externals = externals;

  constructor() { }

  ngOnInit(): void {
  }

}
