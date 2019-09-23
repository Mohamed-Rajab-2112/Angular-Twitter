import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweetHashtags'
})
export class TweetHashtagsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.slice(0, 2).join(', ');
  }

}
