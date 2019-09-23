import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HashtagTweetsComponent } from './components/hashtag-tweets/hashtag-tweets.component';
import { UserTweetsComponent } from './components/user-tweets/user-tweets.component';
import { AppRoutes } from './app-routes';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: AppRoutes.hashtagTweets,
        component: HashtagTweetsComponent
      },
      {
        path: AppRoutes.userTweets,
        component: UserTweetsComponent
      },
      {
        path: '',
        redirectTo: `/${AppRoutes.hashtagTweets}`,
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
