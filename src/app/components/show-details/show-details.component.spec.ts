import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDetailsComponent } from './show-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Component } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing'

describe('ShowDetailsComponent', () => {
  let component: ShowDetailsComponent;
  let fixture: ComponentFixture<ShowDetailsComponent>;
  let tvShowServiceMock: any;

  beforeEach(async(() => {
    tvShowServiceMock = jasmine.createSpyObj('ShowsService', ['getShowById', 'getCast', 'getSeasons']);
    tvShowServiceMock.getShowById.and.returnValue(of());
    tvShowServiceMock.getCast.and.returnValue(of([]));
    tvShowServiceMock.getSeasons.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [ShowDetailsComponent, DummyComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ShowsService, useValue: tvShowServiceMock },
        { provide: Location, useClass: SpyLocation }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch shows based on id', () => {
    tvShowServiceMock.getShowById.and.returnValue(of(dummyShowBasedOnID));
    component.ShowById();
    expect(component.show).toEqual(dummyShowBasedOnID)
  })

  it('should have a goBack method and should call location.back', () => {
    spyOn(component.location, 'back');
    component.goBack();
    expect(component.goBack).toBeDefined();
    expect(component.location.back).toHaveBeenCalled();
  })
});

@Component({
  template: ''
}) class DummyComponent { }

export let dummyShowBasedOnID: [
  {
    id: 1,
    url: "http://www.tvmaze.com/shows/1/under-the-dome",
    name: "Under the Dome",
    type: "Scripted",
    language: "English",
    genres: [],
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
  }
]