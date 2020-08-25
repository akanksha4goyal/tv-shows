import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GenresComponent } from './genres.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowsService } from 'src/app/services/shows.service';
import { SortByRatingPipe } from 'src/app/pipes/sort-by-rating.pipe'
import { Component } from '@angular/core';
import { dummyShows } from '../dashboard/dashboard.component.spec'
import { of, throwError } from 'rxjs';

describe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;

  let tvShowServiceMock: any;

  beforeEach(async(() => {
    tvShowServiceMock = jasmine.createSpyObj('ShowsService', ['getShows']);
    tvShowServiceMock.getShows.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [GenresComponent, SortByRatingPipe],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(
          [
            { path: 'show-details/:id', component: DummyComponent }
          ]
        ),
        HttpClientTestingModule,
      ],
      providers: [
        { provide: ShowsService, useValue: tvShowServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch shows based on genre', () => {
    let genre = 'Action';
    tvShowServiceMock.getShows.and.returnValue(of(dummyShows));
    let showsObservable = component.ShowByGenre(genre);
    showsObservable.subscribe(genreShows => {
      expect(genreShows[0].genres.includes(genre)).toBeTruthy();
    })
  })

  it('should return an error if getShows() throws an error', () => {
    let errorString = 'Error Occured while loadind Data'
    let genre = 'Action'
    tvShowServiceMock.getShows.and.returnValue(throwError(errorString));
    component.ShowByGenre(genre);
    expect(component.errGenreShows).toBe(errorString);
  });

  afterAll(() => {
    fixture.destroy();
  });
});

@Component({
  template: ''
}) class DummyComponent { }
