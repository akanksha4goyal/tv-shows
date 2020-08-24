import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Component } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let tvShowServiceMock: any;

  beforeEach(async(() => {
    tvShowServiceMock = jasmine.createSpyObj('ShowsService', ['getSearchByQuery']);
    tvShowServiceMock.getSearchByQuery.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [SearchComponent, DummyComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ShowsService, useValue: tvShowServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch shows based on search query', () => {
    tvShowServiceMock.getSearchByQuery.and.returnValue(of(dummySearchList));
    component.ngOnInit();
    expect(component.searchedShows.length).toEqual(dummySearchList.length)
  })

  it('should not add show if image is null', () => {
    tvShowServiceMock.getSearchByQuery.and.returnValue(of(dummySearchListWithoutImage)); // just returning an array of object of TvShow
    component.ngOnInit();
    expect(component.searchedShows.length).toBe(0);
  })
});
@Component({
  template: ''
}) class DummyComponent { }

export let dummySearchList: any[] = [
  {
    "score": 17.374249,
    "show": {
      "id": 139,
      "url": "http://www.tvmaze.com/shows/139/girls",
      "name": "Girls",
      "type": "Scripted",
      "language": "English",
      "genres": ["Drama", "Romance"],
      "status": "Ended", "runtime": 30,
      "premiered": "2012-04-15",
      "officialSite": "http://www.hbo.com/girls",
      "schedule": { "time": "22:00", "days": ["Sunday"] },
      "rating": { "average": 6.7 },
      "weight": 97,
      "network": { "id": 8, "name": "HBO", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } },
      "webChannel": null,
      "externals": { "tvrage": 30124, "thetvdb": 220411, "imdb": "tt1723816" },
      "image": { "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg", "original": "http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg" },
      "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
      "updated": 1577601053,
      "_links": { "self": { "href": "http://api.tvmaze.com/shows/139" }, "previousepisode": { "href": "http://api.tvmaze.com/episodes/1079686" } }
    }
  }


]

export let dummySearchListWithoutImage: any[] = [
  {
    "score": 17.374249,
    "show": {
      "id": 139,
      "url": "http://www.tvmaze.com/shows/139/girls",
      "name": "Girls",
      "type": "Scripted",
      "language": "English",
      "genres": ["Drama", "Romance"],
      "status": "Ended", "runtime": 30,
      "premiered": "2012-04-15",
      "officialSite": "http://www.hbo.com/girls",
      "schedule": { "time": "22:00", "days": ["Sunday"] },
      "rating": { "average": 6.7 },
      "weight": 97,
      "network": { "id": 8, "name": "HBO", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } },
      "webChannel": null,
      "externals": { "tvrage": 30124, "thetvdb": 220411, "imdb": "tt1723816" },
      "image": {},
      "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
      "updated": 1577601053,
      "_links": { "self": { "href": "http://api.tvmaze.com/shows/139" }, "previousepisode": { "href": "http://api.tvmaze.com/episodes/1079686" } }
    }
  }
]