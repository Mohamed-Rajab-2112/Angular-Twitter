import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private apiService: ApiService) {
  }

  getTweetsByHashtag(hashtag, pagesLimit) {
    // const options: any = this.apiService.headers();
    // const params = new HttpParams().set('pages_limit', pagesLimit);

    // options.params = params;
    return this.apiService.get(this.apiService.apiUrls().getTweetsByHashtagUrl.replace('{HASHTAG}', hashtag), pagesLimit);
  }

  getTweetsByUser(user, pagesLimit) {
    // const options: any = this.apiService.headers();
    // const params = new HttpParams().set('pages_limit', pagesLimit);

    // options.params = params;
    return this.apiService.get(this.apiService.apiUrls().getTweetsByUserUrl.replace('{USER}', user), pagesLimit);
  }

  prepareTweetDate(tweets) {
    return tweets.map(tweet => {
      tweet.date = new Date(tweet.date.replace('-', ''));
      return tweet;
    });
  }
}
