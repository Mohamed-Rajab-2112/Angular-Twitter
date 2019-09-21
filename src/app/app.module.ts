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

@NgModule({
  declarations: [
    AppComponent,
    HashtagTweetsComponent,
    UserTweetsComponent,
    TabsComponent,
    SearchInputComponent,
    TweetsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
