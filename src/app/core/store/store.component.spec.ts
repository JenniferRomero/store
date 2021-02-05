import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { MockCat, MockCategories } from 'src/app/shared/services/categories/mock-categories';
import { StoreComponent } from './store.component';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;
  let service: CategoriesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ StoreComponent ],
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

  afterEach( fakeAsync(() => {
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
    const mockResumen = MockCategories;
    spyOn(service, 'getCategories').and.returnValue(
      of(mockResumen)
    );

    service.getCategories().subscribe((data=>{
      console.log(component.categories);
      component.categories = data;
      expect(data).toBeTruthy();
      expect(data).toEqual(mockResumen);
    }));
    //tick(100);

    expect(mockResumen).toBeDefined();
    //expect(spy).toHaveBeenCalled();
  });


  it('shouldpromise', fakeAsync (() => {
    const mockResumen = MockCategories;
    spyOn(service, 'getCategories2').and.returnValue(
      Promise.resolve(mockResumen)
    );

    const spy = spyOn(component, 'pruebaPromise');
    component.pruebaPromise();
    tick(100);
    console.log('component.pruebaP');
    console.log(component.pruebaP);
    expect(component.pruebaP).toEqual(mockResumen);
    expect(spy).toHaveBeenCalled();
  }))

});


