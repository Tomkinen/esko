import { TestBed, inject } from '@angular/core/testing';

import { ApiconnectionService } from './apiconnection.service';

describe('ApiconnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiconnectionService]
    });
  });

  it('should be created', inject([ApiconnectionService], (service: ApiconnectionService) => {
    expect(service).toBeTruthy();
  }));
});
