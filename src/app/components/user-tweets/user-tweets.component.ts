import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets.service';

@Component({
  selector: 'app-user-tweets',
  templateUrl: './user-tweets.component.html',
  styleUrls: ['./user-tweets.component.scss']
})
export class UserTweetsComponent implements OnInit {
  currentPage = 1;
  user: string;
  tweets = [];
  toggleLoading;

  constructor(private tweetsService: TweetsService) {
  }

  ngOnInit() {
  }

  searchTweets(user, pagesLimit = 1) {
    this.toggleLoading = true;
    this.user = user;
    this.tweetsService.getTweetsByUser(user, pagesLimit)
      .subscribe((tweets: any) => {
        this.tweets = this.tweetsService.prepareTweetDate(tweets);
        this.toggleLoading = false;
      });
  }

  nextPage(page) {
    this.tweetsService.getTweetsByHashtag(this.user, page)
      .subscribe(tweets => console.log(tweets));
  }
}
