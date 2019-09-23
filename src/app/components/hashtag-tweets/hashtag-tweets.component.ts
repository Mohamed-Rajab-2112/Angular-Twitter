import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets.service';
import has = Reflect.has;

@Component({
  selector: 'app-hashtag-tweets',
  templateUrl: './hashtag-tweets.component.html',
  styleUrls: ['./hashtag-tweets.component.scss']
})
export class HashtagTweetsComponent implements OnInit {
  currentPage = 1;
  hashTag: string;
  tweets = [];
  toggleLoading;

  constructor(private tweetsService: TweetsService) {
  }

  ngOnInit() {
  }

  searchTweets(hashTag, pagesLimit = 1) {
    this.toggleLoading = true;
    this.hashTag = hashTag;
    this.tweetsService.getTweetsByHashtag(hashTag, pagesLimit)
      .subscribe((tweets: any) => {
        this.tweets = this.tweetsService.prepareTweetDate(tweets);
        this.toggleLoading = false;
      });
  }

  nextPage(page) {
    this.tweetsService.getTweetsByHashtag(this.hashTag, page)
      .subscribe(tweets => console.log(tweets));
  }

}
