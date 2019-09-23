import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HashtagTweetsComponent } from './components/hashtag-tweets/hashtag-tweets.component';
import { UserTweetsComponent } from './components/user-tweets/user-tweets.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TweetsTableComponent } from './components/tweets-table/tweets-table.component';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TweetsService } from "./services/tweets.service";
import { HttpClientModule } from "@angular/common/http";
import { TweetHashtagsPipe } from './pipes/tweet-hashtags.pipe';
import { TweetTextPipe } from './pipes/tweet-text.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HashtagTweetsComponent,
    UserTweetsComponent,
    TabsComponent,
    SearchInputComponent,
    TweetsTableComponent,
    TweetHashtagsPipe,
    TweetTextPipe,
    LoadingComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [TweetsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
