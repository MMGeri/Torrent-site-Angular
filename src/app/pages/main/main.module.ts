import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TableComponent } from './table/table.component';
import { InfoComponent } from './table/info/info.component';
import { SortPipe } from 'src/app/shared/pipes/sort-pipe/sort.pipe';
import { SearchPipe } from 'src/app/shared/pipes/search-pipe/search.pipe';
import { SortCommentsByDatePipe } from 'src/app/shared/pipes/sort-comments-by-date/sort-comments-by-date.pipe';
import { FormsModule } from '@angular/forms';
import { NavComponent } from 'src/app/shared/nav/nav.component';


@NgModule({
  declarations: [
    MainComponent,
    TableComponent,
    SearchBarComponent,
    InfoComponent,
    SortPipe,
    SearchPipe,
    SortCommentsByDatePipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    MainRoutingModule,
  ],
  providers: [SortPipe]
})
export class MainModule { }
