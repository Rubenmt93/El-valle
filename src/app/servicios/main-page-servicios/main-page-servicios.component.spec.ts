import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageServiciosComponent } from './main-page-servicios.component';

describe('MainPageServiciosComponent', () => {
  let component: MainPageServiciosComponent;
  let fixture: ComponentFixture<MainPageServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
