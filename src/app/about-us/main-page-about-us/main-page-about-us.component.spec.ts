import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageAboutUsComponent } from './main-page-about-us.component';

describe('MainPageAboutUsComponent', () => {
  let component: MainPageAboutUsComponent;
  let fixture: ComponentFixture<MainPageAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
