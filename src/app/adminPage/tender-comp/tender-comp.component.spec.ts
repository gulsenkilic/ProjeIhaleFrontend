/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TenderCompComponent } from './tender-comp.component';

describe('TenderCompComponent', () => {
  let component: TenderCompComponent;
  let fixture: ComponentFixture<TenderCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
