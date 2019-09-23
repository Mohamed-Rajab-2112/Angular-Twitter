import { Component, OnDestroy, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from '../../app-routes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hashtag-tweets',
  templateUrl: './hashtag-tweets.component.html',
  styleUrls: ['./hashtag-tweets.component.scss']
})
export class HashtagTweetsComponent implements OnInit, OnDestroy {
  currentPage;
  hashTag: string;
  tweets = [];
  toggleLoading;
  activatedRouteSubscription: Subscription;
  getTweetsByHashtagSubscription: Subscription;

  constructor(private tweetsService: TweetsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._extractRouteParamsAndSearchTweets();
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription.unsubscribe();
    this.getTweetsByHashtagSubscription && this.getTweetsByHashtagSubscription.unsubscribe();
  }

  private _extractRouteParamsAndSearchTweets() {
    this.activatedRouteSubscription = this.activatedRoute.queryParams
      .subscribe(queryParams => {
        this.currentPage = queryParams.page;
        if (queryParams.hashtag) {
          this._searchTweets(queryParams.hashtag, queryParams.page);
        }
      });
  }

  private _searchTweets(hashTag, pagesLimit = 1) {
    this.toggleLoading = true;
    if (this.hashTag !== hashTag) {
      this.hashTag = hashTag;
    }
    this.getTweetsByHashtagSubscription = this.tweetsService.getTweetsByHashtag(hashTag, pagesLimit)
      .subscribe((tweets: any) => {
          this.tweets = this.tweetsService.prepareTweetDate(tweets);
          this.toggleLoading = false;
        },
        () => {
          this.toggleLoading = false;
          alert('Error Retrieving data');
        });
  }

  routeToSearchPage(hashtag, page = 1) {
    this.router.navigate([AppRoutes.hashtagTweets], {queryParams: {hashtag, page}});
  }

}
