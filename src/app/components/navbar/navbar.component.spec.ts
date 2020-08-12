import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowsService } from 'src/app/services/shows.service';
import { Component } from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let showsServiceMock: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent, DummyComponent ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: 'dashboard', component: DummyComponent},
            {path: 'search/:query', component:DummyComponent},
            {path: 'genre/:id', component:DummyComponent}
          ]
        ),
      
      ],
      providers:[
        { provide: ShowsService, useValue: showsServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
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