import { ComponentFixture, TestBed, async, fakeAsync, flush, tick } from '@angular/core/testing';
import { MockCat, MockCategories } from 'src/app/shared/services/categories/mock-categories';
import { of, throwError } from 'rxjs';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreComponent } from './store.component';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;
  let service: CategoriesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [StoreComponent],
      providers: [CategoriesService],
      imports: [NgxPaginationModule, HttpClientTestingModule]
    })
      .compileComponents();
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

  it('should call cargarDatos if when consulting the summary it brings data', () => {
      const getItems = spyOn(component, 'getItems')
      const mockResumen = MockCategories;
      spyOn(component.categoriesService, 'getCategories').and.returnValue(
        of(mockResumen)
      );
      component.getProductos()
      expect(component.categories).toEqual(mockResumen);
      expect(getItems).toHaveBeenCalled();
    });


    it('should throw an error ', () => {
      const getItems = spyOn(component, 'getItems')
      spyOn(component.categoriesService, 'getCategories').and.returnValue(
        throwError(null)
      );
      component.getProductos()
      expect(component.categories).toBeNull()
      expect(getItems).not.toHaveBeenCalled();
    });

});


