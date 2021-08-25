/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyloseOutComponent } from './myloseOut.component';

describe('MyloseOutComponent', () => {
  let component: MyloseOutComponent;
  let fixture: ComponentFixture<MyloseOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyloseOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyloseOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
