import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenresComponent } from './components/genres/genres.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { SortByRatingPipe } from './pipes/sort-by-rating.pipe'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GenresComponent,
    ShowDetailsComponent,
    NavbarComponent,
    SearchComponent,
    SortByRatingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
