import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Torrent } from 'src/app/shared/types/Torrent';
import { Comment } from 'src/app/shared/types/Comment';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() torrent!: Torrent ;
  
  commentsForm = this.createForm(
      {
        sender_name: 'Test Person',
        sender_uid: 'testuid',
        comment_text: '',
        time: new Date()
      }
    )
    
    constructor(
      private fb: FormBuilder, 
      private dbService: DatabaseService,
      private router: Router
      ) { }
    
    ngOnInit(): void {
      
    }
    
    createForm(data: Comment) {
      return this.fb.group(data);
    }
    
    onSubmit(){
      this.torrent.info.comments.push(this.commentsForm.value);
    }
    
    
    torrentInfo(info:string){
      if(this.torrent?.info.enabled != undefined)
      this.torrent.info.selected=info;
    }

    download(url: string,fileType:string) {
      this.dbService.downloadFile(url,fileType);
    }
    
  }
  