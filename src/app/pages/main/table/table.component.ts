import { Component, OnInit } from '@angular/core';
import { Torrent } from '../../../shared/types/Torrent';
import { Input } from '@angular/core';
import { SortPipe } from '../../../shared/pipes/sort-pipe/sort.pipe';

import { DatabaseService } from 'src/app/shared/services/database.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  sortBy: string = '';
  @Input() searchInput: string = '';
  
  
  torrents: Torrent[] = [];
  sortedData: Torrent[] = [];


  info: any;
  
  constructor(private sortPipe: SortPipe, private dbService: DatabaseService) {
    this.sortBy = 'name';
    this.info = {};
  }
  
  ngOnInit(): void {
    this.dbService.getTorrents().subscribe((torrents: Array<any>) => {
      for(let torrent of torrents){
        torrent.date= torrent.date.toDate();
        for(let i=0;i<torrent.info.comments.length;i++){
          torrent.info.comments[i].time= torrent.info.comments[i].time.toDate();
        }
        console.log(torrent.info.comments);
        this.torrents.push(torrent as Torrent);
      }
      this.sortedData = torrents;
    }, error => {
      console.log(error);
    });
  }
  
  sortData(by: any) {
    this.sortBy = by.active;
    const data = this.torrents.slice();
    const isAsc = by.direction === 'asc';
    this.sortedData = this.sortPipe.transform(data, this.sortBy,isAsc);
    this.sortedData = [...this.sortedData];
  }
  
  show(id:string){
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
