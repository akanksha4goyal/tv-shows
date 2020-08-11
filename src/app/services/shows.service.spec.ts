import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShowsService } from './shows.service';

describe('ShowsService', () => {
  let service: ShowsService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShowsService]
    });
    service = TestBed.inject(ShowsService);
    httpMock=TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
