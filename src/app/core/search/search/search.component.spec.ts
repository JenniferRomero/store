import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchComponent } from './search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { MockProductos, MockProductosML } from 'src/app/shared/services/categories/mock-productos';

import { of, throwError } from 'rxjs';
import {
  MockCategories,
} from 'src/app/shared/services/categories/mock-categories';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: CategoriesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ SearchComponent ],
      providers: [CategoriesService],
      imports: [NgxPaginationModule, HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CategoriesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('function search', () => {
    expect(component.search('vestidos')).toBeFalsy();
    expect(component.search(null)).toBeFalsy();
  });

  it('should call search', () => {
    const mockProML = MockProductosML;
    const mockPro = MockProductos;
    spyOn(component.categoriesService, 'getItemName').and.returnValue(
      of(mockProML)
    );
    component.search('vestidos');
    expect(component.arrayFilter).toEqual(mockPro);

  });

  it('should call search throw an error ', () => {
    spyOn(component.categoriesService, 'getItemName').and.returnValue(
      throwError(null)
    );
    component.search('vestidos');
    expect(component.arrayFilter).toBeNull();
  });

});
