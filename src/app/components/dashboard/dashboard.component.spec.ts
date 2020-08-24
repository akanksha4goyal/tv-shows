import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { ShowsService } from 'src/app/services/shows.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { SortByRatingPipe } from 'src/app/pipes/sort-by-rating.pipe';
import { Shows } from 'src/app/models/shows.model';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let tvShowServiceMock: any;

  beforeEach(async(() => {
    tvShowServiceMock = jasmine.createSpyObj('ShowsService', ['getShows']);
    tvShowServiceMock.getShows.and.returnValue(of([]))
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, SortByRatingPipe],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(
          [
            { path: 'show-details/:id', component: DummyComponent }
          ]
        ),
        HttpClientTestingModule
      ],
      providers: [
        { provide: ShowsService, useValue: tvShowServiceMock }
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


  it('should fetch shows based on genre', () => {
    let genre = "Action";
    let showByGenre: Shows[];
    tvShowServiceMock.getShows.and.returnValue(of(dummyShows))
    component.showsList();
    showByGenre = component.showByGenre(genre);
    expect(showByGenre.length).toBe(1)
  })

  afterAll(() => {
    fixture.destroy();
  });
});

export let dummyShows: Shows[] = [
  {
    id: 1,
    url: "http://www.tvmaze.com/shows/1/under-the-dome",
    name: "Under the Dome",
    type: "Scripted",
    language: "English",
    genres: ['Action', 'Thriller'],
    status: "Ended",
    runtime: 60,
    premierd: "1/2/2020",
    officialSite: "http://www.cbs.com/shows/under-the-dome/",
    schedule: {},
    rating: {},
    weight: 97,
    network: {},
    webChannel: {},
    externals: {},
    image: {},
    _links: {},
    summary: "abcd",
    updated: 1573667713,
  },
  {
    id: 2,
    url: "http://www.tvmaze.com/shows/2/person-of-interest",
    name: "person-of-interest",
    type: "Scripted",
    language: "English",
    genres: ['Comedy', 'Drama'],
    status: "Ended",
    runtime: 60,
    premierd: "1/2/2020",
    officialSite: "http://www.cbs.com/shows/person-of-interest/",
    schedule: {},
    rating: {},
    weight: 97,
    network: {},
    webChannel: {},
    externals: {},
    image: {},
    _links: {},
    summary: "abcd",
    updated: 1573667713,
  }
]

@Component({
  template: ''
}) class DummyComponent { }

