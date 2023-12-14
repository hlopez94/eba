import { TestBed } from '@angular/core/testing';

import { PrimersService } from './primers.service';

describe('PrimersService', () => {
  let service: PrimersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
