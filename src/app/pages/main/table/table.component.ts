import { Component, OnInit } from '@angular/core';
import { Torrent } from '../../../shared/types/Torrent';
import { Input } from '@angular/core';
import { SortPipe } from '../../../shared/pipes/sort-pipe/sort.pipe';
import { TorrentsObject } from '../../../shared/constants/torrents';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  sortBy: string = '';
  @Input() searchInput: string = '';
  
  
  torrents: Torrent[] = TorrentsObject;
  info: any;
  
  constructor(private sortPipe: SortPipe) { 
    this.sortBy = 'name';
    this.info = {};
  }
  
  ngOnInit(): void {
  }
  
  sort(by: string) {
    this.sortBy = by;
    this.torrents = this.sortPipe.transform(this.torrents, this.sortBy);
    this.torrents = [...this.torrents];
  }
  
  show(id:number){
    for(let torrent of this.torrents){
      if(torrent.id == id){
        torrent.info.enabled=!torrent.info.enabled;
      }
      else
      {
        torrent.info.enabled=false;
      }
    }
  }
  
  
  
  
}
