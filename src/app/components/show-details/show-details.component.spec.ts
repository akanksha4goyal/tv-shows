import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsComponent } from './show-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShowDetailsComponent', () => {
  let component: ShowDetailsComponent;
  let fixture: ComponentFixture<ShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailsComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: []
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
});
