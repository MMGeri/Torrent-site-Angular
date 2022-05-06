import { SortCommentsByDatePipe } from './sort-comments-by-date.pipe';

describe('SortCommentsByDatePipe', () => {
  it('create an instance', () => {
    const pipe = new SortCommentsByDatePipe();
    expect(pipe).toBeTruthy();
  });
});
