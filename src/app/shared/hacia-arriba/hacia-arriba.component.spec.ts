import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaciaArribaComponent } from './hacia-arriba.component';

describe('HaciaArribaComponent', () => {
  let component: HaciaArribaComponent;
  let fixture: ComponentFixture<HaciaArribaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaciaArribaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaciaArribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
