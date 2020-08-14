import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Component } from '@angular/core';
import { dummyShows } from '../dashboard/dashboard.component.spec';
import { ShowsService } from 'src/app/services/shows.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let tvShowServiceMock: any;

  beforeEach(async(() => {
    tvShowServiceMock = jasmine.createSpyObj('ShowsService', ['getSearchByQuery']);
    tvShowServiceMock.getSearchByQuery.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [ SearchComponent,DummyComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        {provide: ShowsService, useValue: tvShowServiceMock}
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

  it('should fetch shows based on search query', ()=> {
    let query="undefined"
    tvShowServiceMock.getSearchByQuery.and.returnValue(of(dummySearchList));
    component.ngOnInit();
    expect(component.searchList).toEqual(dummySearchList);
  })
});
@Component({
  template: ''
}) class DummyComponent { } 

export let dummySearchList: any[]=[
  {score:2.3614159,
  show: []}
]