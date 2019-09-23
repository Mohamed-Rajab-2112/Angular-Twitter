import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tweets-table',
  templateUrl: './tweets-table.component.html',
  styleUrls: ['./tweets-table.component.scss']
})
export class TweetsTableComponent implements OnChanges {
  @Input() tweets;
  @Input() currentPage;
  pageTweets = [];
  @Output() newPage = new EventEmitter();
  pages = [];
  itemsPerPage = 10;

  constructor() {
  }

  ngOnChanges() {
    this._constructPaginationPages();
    this.pageTweets = this.tweets.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  private _constructPaginationPages() {
    const countOfTweets = this.tweets.length;
    const numberOfPages = countOfTweets % this.itemsPerPage ? Math.floor(countOfTweets / this.itemsPerPage) + 1 :
      countOfTweets / this.itemsPerPage;
    this.pages = [];
    for (let i = 0; i < numberOfPages; i++) {
      this.pages.push(i + 1);
    }
  }

  changePage(currentPage) {
    this.newPage.emit(currentPage);
  }
}
