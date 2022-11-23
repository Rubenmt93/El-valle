import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaciaAbajoComponent } from './hacia-abajo.component';

describe('HaciaAbajoComponent', () => {
  let component: HaciaAbajoComponent;
  let fixture: ComponentFixture<HaciaAbajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaciaAbajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaciaAbajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
