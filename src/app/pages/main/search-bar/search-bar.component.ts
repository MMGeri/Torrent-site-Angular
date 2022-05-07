import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm: any;
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.searchEmitter.emit(this.searchTerm);
  }

}
