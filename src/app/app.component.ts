import { Component } from '@angular/core';
import { AppRoutes } from "./routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Twitter';

  tabs = [
    {
      name: 'Hashtag search',
      url: AppRoutes.hashtagTweets
    },
    {
      name: 'User search',
      url: AppRoutes.userTweets
    }
  ];
}
