import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {DataTableModule} from 'angular-4-data-table-bootstrap-4';

import {DataTableDemo1} from './data-table/data-table-demo1';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    DataTableDemo1
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DataTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
