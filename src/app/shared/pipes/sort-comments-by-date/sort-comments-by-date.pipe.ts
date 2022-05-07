import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from '../../../shared/types/Comment';

@Pipe({
  name: 'sortCommentsByDate'
})
export class SortCommentsByDatePipe implements PipeTransform {

  transform(value: Comment[] | undefined, ...args: unknown[]): Comment[] | undefined {
    if(value!=undefined)
    value.sort((b, a) =>
         (b['time' as keyof Comment]! as any).getTime() - (a['time' as keyof Comment]! as any).getTime()
    )
    return value;
  }

}
