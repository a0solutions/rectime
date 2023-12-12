/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RectimeComponent } from './rectime.component';

describe('RectimeComponent', () => {
  let component: RectimeComponent;
  let fixture: ComponentFixture<RectimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
