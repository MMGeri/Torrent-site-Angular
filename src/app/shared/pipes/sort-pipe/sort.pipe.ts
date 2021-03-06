import { Pipe, PipeTransform } from '@angular/core';
import { Torrent } from '../../types/Torrent';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  
  
  transform(value: Torrent[], sortBy: string, isAsc: boolean): Torrent[] {
    if (!value) {
      return [];
    }

    if(sortBy === 'name' ) {
    value.sort((a, b) => 
       (a[sortBy as keyof Torrent]! as string).localeCompare(b[sortBy as keyof Torrent]! as string) * (isAsc ? 1 : -1)
    )
    }

    if(sortBy === 'size' ) {
    value.sort((a, b) => 
        ((b[sortBy as keyof Torrent]! as number) - (a[sortBy as keyof Torrent]! as number)) * (isAsc ? 1 : -1)
    )
    }

    if(sortBy === 'date' ) {
    value.sort((a, b) =>
         ((b[sortBy as keyof Torrent]! as Date).getTime() - (a[sortBy as keyof Torrent]! as Date).getTime()) * (isAsc ? 1 : -1)
    )
    }

    if(sortBy === 'seeders' ) {
    value.sort((a, b) =>
         ((b[sortBy as keyof Torrent]! as number) - (a[sortBy as keyof Torrent]! as number)) * (isAsc ? 1 : -1)
    )
    } 

   
    
    
    return value;
  }
}
