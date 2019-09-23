import { Component, OnDestroy, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from '../../app-routes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-tweets',
  templateUrl: './user-tweets.component.html',
  styleUrls: ['./user-tweets.component.scss']
})
export class UserTweetsComponent implements OnInit, OnDestroy {
  currentPage;
  user: string;
  tweets = [];
  toggleLoading;
  activatedRouteSubscription: Subscription;
  getTweetsByUserSubscription: Subscription;

  constructor(private tweetsService: TweetsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._extractRouteParamsAndSearchTweets();
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription.unsubscribe();
    this.getTweetsByUserSubscription && this.getTweetsByUserSubscription.unsubscribe();
  }

  private _extractRouteParamsAndSearchTweets() {
    this.activatedRouteSubscription = this.activatedRoute.queryParams
      .subscribe(queryParams => {
        this.currentPage = queryParams.page;
        if (queryParams.user) {
          this._searchTweets(queryParams.user, queryParams.page);
        }
      });
  }

  private _searchTweets(user, pagesLimit = 1) {
    this.toggleLoading = true;
    if (this.user !== user) {
      this.user = user;
    }
    this.getTweetsByUserSubscription = this.tweetsService.getTweetsByUser(user, pagesLimit)
      .subscribe((tweets: any) => {
        this.tweets = this.tweetsService.prepareTweetDate(tweets);
        this.toggleLoading = false;
      },
        () => {
          this.toggleLoading = false;
          alert('Error Retrieving data');
        });
  }

  routeToSearchPage(user, page = 1) {
    this.router.navigate([AppRoutes.userTweets], {queryParams: {user, page}});
  }

}
