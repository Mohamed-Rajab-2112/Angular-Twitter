import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets-table',
  templateUrl: './tweets-table.component.html',
  styleUrls: ['./tweets-table.component.scss']
})
export class TweetsTableComponent implements OnInit {
  @Input() tweets;

  constructor() {
  }

  ngOnInit() {
  }

}
