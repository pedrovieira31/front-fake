import { TestBed } from '@angular/core/testing';

import { RealtysService } from './realtys.service';

describe('RealtysService', () => {
  let service: RealtysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
