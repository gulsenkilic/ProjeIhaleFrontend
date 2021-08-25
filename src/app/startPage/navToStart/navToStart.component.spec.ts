/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavToStartComponent } from './navToStart.component';

describe('NavToStartComponent', () => {
  let component: NavToStartComponent;
  let fixture: ComponentFixture<NavToStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavToStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavToStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
