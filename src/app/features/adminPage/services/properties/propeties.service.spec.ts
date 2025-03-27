import { TestBed } from '@angular/core/testing';

import { PropetiesService } from './propeties.service';

describe('PropetiesService', () => {
  let service: PropetiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropetiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
