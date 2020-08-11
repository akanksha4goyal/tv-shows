import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresComponent } from './genres.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortByRatingPipe } from 'src/app/pipes/sort-by-rating.pipe'

describe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;
  let service: ShowsService;
  let sortPipe: SortByRatingPipe

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresComponent, SortByRatingPipe ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        NgxPaginationModule

      ],
      providers: []
    })
    .compileComponents();
    // component = TestBed.createComponent(GenresComponent).componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
