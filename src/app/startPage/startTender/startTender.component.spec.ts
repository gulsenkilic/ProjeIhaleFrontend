/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartTenderComponent } from './startTender.component';

describe('StartTenderComponent', () => {
  let component: StartTenderComponent;
  let fixture: ComponentFixture<StartTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
