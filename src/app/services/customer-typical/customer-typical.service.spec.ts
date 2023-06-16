import { TestBed } from '@angular/core/testing';

import { CustomerTypicalService } from './customer-typical.service';

describe('CustomerTypicalService', () => {
  let service: CustomerTypicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerTypicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
