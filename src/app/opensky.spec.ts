import { TestBed } from '@angular/core/testing';

import { OpenskyService } from './opensky';

describe('Opensky', () => {
  let service: OpenskyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenskyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
