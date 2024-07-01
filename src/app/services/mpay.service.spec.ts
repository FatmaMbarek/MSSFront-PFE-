import { TestBed } from '@angular/core/testing';

import { MpayService } from './mpay.service';

describe('MpayService', () => {
  let service: MpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
