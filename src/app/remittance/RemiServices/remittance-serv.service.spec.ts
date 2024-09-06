import { TestBed } from '@angular/core/testing';

import { RemittanceServService } from './remittance-serv.service';

describe('RemittanceServService', () => {
  let service: RemittanceServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemittanceServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
