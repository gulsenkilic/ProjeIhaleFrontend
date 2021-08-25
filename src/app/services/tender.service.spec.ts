/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TenderService } from './tender.service';

describe('Service: Tender', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenderService]
    });
  });

  it('should ...', inject([TenderService], (service: TenderService) => {
    expect(service).toBeTruthy();
  }));
});
