import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { Torrent } from 'src/app/shared/types/Torrent';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() torrent?: Torrent;

  constructor() { }

  ngOnInit(): void {
  }

  torrentInfo(info:string){
    if(this.torrent?.info.enabled != undefined)
    this.torrent.info.selected=info;
  }

}
