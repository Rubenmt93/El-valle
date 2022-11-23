import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageGaleriaComponent } from './main-page-galeria.component';

describe('MainPageGaleriaComponent', () => {
  let component: MainPageGaleriaComponent;
  let fixture: ComponentFixture<MainPageGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
