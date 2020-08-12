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

  it('should fetch all TV Shows',()=>{
    service.getShows().subscribe(Shows=>{
      expect(Shows.length).toBeGreaterThan(0)
    })
    const req=httpMock.expectOne(service.shows_URL);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should fetch the Shows By id', () => { 
    let id = 1;
    service.getShowById(id).subscribe(Show => {
      expect(Show).toBeDefined();
    });
    const req = httpMock.expectOne(`http://api.tvmaze.com/shows/${id}`);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  })

  it('should fetch the Cast of Shows', () => { 
    let id = 1;
    service.getCast(id).subscribe(Shows_Cast => {
      expect(Shows_Cast).toBeDefined();
    });
    const req = httpMock.expectOne(`http://api.tvmaze.com/shows/${id}/cast`);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should fetch the shows from search', () => { 
    let query = 'girls';
    service.getSearchByQuery(query).subscribe(Shows => {
      expect(Shows).toBeDefined();
    });
    const req = httpMock.expectOne(`http://api.tvmaze.com/search/shows?q=${query}`);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  })
});
