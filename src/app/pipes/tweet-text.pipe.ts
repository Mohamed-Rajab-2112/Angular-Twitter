import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweetText'
})
export class TweetTextPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.length > 50 ? value.slice(0, 50) + '...' : value;
  }

}
