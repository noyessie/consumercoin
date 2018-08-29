import { TestBed, inject } from '@angular/core/testing';

import { GnyService } from './gny.service';

describe('GnyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GnyService]
    });
  });

  it('should be created', inject([GnyService], (service: GnyService) => {
    expect(service).toBeTruthy();
  }));
});
