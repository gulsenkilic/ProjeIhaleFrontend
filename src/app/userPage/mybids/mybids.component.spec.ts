/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MybidsComponent } from './mybids.component';

describe('MybidsComponent', () => {
  let component: MybidsComponent;
  let fixture: ComponentFixture<MybidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
