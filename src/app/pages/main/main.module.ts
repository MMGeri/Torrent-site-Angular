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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavModule } from 'src/app/shared/nav/nav.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

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
    ReactiveFormsModule,
    CommonModule,
    MainRoutingModule,
    NavModule,

    MatSidenavModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule
  ],
  providers: [SortPipe]
})
export class MainModule { }
