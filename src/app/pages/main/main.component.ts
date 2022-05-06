import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  query: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  loadQuery(query: string) {
    this.query = query;
  }

}
