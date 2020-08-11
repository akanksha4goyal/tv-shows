import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ShowsService } from 'src/app/services/shows.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { GenresComponent } from '../genres/genres.component';
import { ShowDetailsComponent } from '../show-details/show-details.component';
import { SearchComponent } from '../search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortByRatingPipe } from 'src/app/pipes/sort-by-rating.pipe';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, GenresComponent,SearchComponent, ShowDetailsComponent, SortByRatingPipe ],
      imports: [
        HttpClientModule,
        NgxPaginationModule,
        RouterTestingModule.withRoutes([
          { path: 'genres/:id', component: DummyComponent },
          { path: 'search/:query', component: DummyComponent },
          { path: 'show-details/:id', component: DummyComponent }
        ])
      ],
      providers: [
        {provide: ShowsService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
@Component({
  template: ''
}) class DummyComponent { }
