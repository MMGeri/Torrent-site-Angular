import { Pipe, PipeTransform } from '@angular/core';
import { Torrent } from '../../types/Torrent';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Torrent[], query: string): Torrent[] {

    if (!value) {
      return [];
    }

    //check if the name of values contains the query
    return value.filter(torrent => torrent.name.toLowerCase().includes(query.toLowerCase()));
  }

}
