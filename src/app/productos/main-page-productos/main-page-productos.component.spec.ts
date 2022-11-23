import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageProductosComponent } from './main-page-productos.component';

describe('MainPageProductosComponent', () => {
  let component: MainPageProductosComponent;
  let fixture: ComponentFixture<MainPageProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
