import { TweetTextPipe } from './tweet-text.pipe';

describe('TweetTextPipe', () => {
  it('create an instance', () => {
    const pipe = new TweetTextPipe();
    expect(pipe).toBeTruthy();
  });
});
