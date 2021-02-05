import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  flush,
} from '@angular/core/testing';
import {
  MockCategories,
} from 'src/app/shared/services/categories/mock-categories';
import { of, throwError } from 'rxjs';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreComponent } from './store.component';
import { MockProductos, MockProductosML } from 'src/app/shared/services/categories/mock-productos';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;
  let service: CategoriesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [StoreComponent],
      providers: [CategoriesService],
      imports: [NgxPaginationModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CategoriesService);
    fixture.detectChanges();
  });

  afterEach(fakeAsync(() => {
    flush();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('function getItems', () => {
    expect(component.getItems('MCO157281')).toBeFalsy();
  });

  it('function search', () => {
    expect(component.search('vestidos')).toBeFalsy();
    expect(component.search(null)).toBeFalsy();
  });

  it('should call getProductos', () => {
    const getItems = spyOn(component, 'getItems');
    const mockResumen = MockCategories;
    spyOn(component.categoriesService, 'getCategories').and.returnValue(
      of(mockResumen)
    );
    component.getProductos();
    expect(component.categories).toEqual(mockResumen);
    expect(getItems).toHaveBeenCalled();
  });

  it('should call getProductos throw an error ', () => {
    const getItems = spyOn(component, 'getItems');
    spyOn(component.categoriesService, 'getCategories').and.returnValue(
      throwError(null)
    );
    component.getProductos();
    expect(component.categories).toBeNull();
    expect(getItems).not.toHaveBeenCalled();
  });


  it('should call getItems', () => {
    const mockProML = MockProductosML;
    const mockPro = MockProductos;
    spyOn(component.categoriesService, 'getItems').and.returnValue(
      of(mockProML)
    );
    component.getItems('MCO157281');
    expect(component.arrayProductos).toEqual(mockPro);

  });

  it('should call getItems throw an error ', () => {
    spyOn(component.categoriesService, 'getItems').and.returnValue(
      throwError(null)
    );
    component.getItems('MCO157281');
    expect(component.arrayProductos).toBeNull();
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
