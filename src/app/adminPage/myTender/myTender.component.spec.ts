/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyTenderComponent } from './myTender.component';

describe('MyTenderComponent', () => {
  let component: MyTenderComponent;
  let fixture: ComponentFixture<MyTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
