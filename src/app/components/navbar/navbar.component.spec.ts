import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  it('searchInput should update value when input changes', async(() => {
    expect(fixture.debugElement.nativeElement.query).toBeFalsy()

    const el: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const testValue = 'some_value';

    el.value = testValue;
   el.dispatchEvent(new Event('change'));
    expect(component.query).toEqual(testValue);
}));

it('should call change() when input changes',()=>{
  spyOn(component,'change')
  component.change(event);
  expect(component.change).toHaveBeenCalled();
})

});

@Component({
  template: ''
}) class DummyComponent { }