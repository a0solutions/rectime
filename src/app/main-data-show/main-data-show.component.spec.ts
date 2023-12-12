import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDataShowComponent } from './main-data-show.component';

describe('MainDataShowComponent', () => {
  let component: MainDataShowComponent;
  let fixture: ComponentFixture<MainDataShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDataShowComponent]
    });
    fixture = TestBed.createComponent(MainDataShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
