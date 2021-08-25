/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TenderbidComponent } from './tenderbid.component';

describe('TenderbidComponent', () => {
  let component: TenderbidComponent;
  let fixture: ComponentFixture<TenderbidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderbidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
