import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler  } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { CategoriesService } from './categories.service';
import { MockCategories } from './mock-categories';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [HttpClient, CategoriesService, HttpHandler]
    });
    service = TestBed.inject(CategoriesService);

    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
