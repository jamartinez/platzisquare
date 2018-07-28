import { TestBed, inject } from '@angular/core/testing';

import { GridpageService } from './gridpage.service';

describe('GridpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridpageService]
    });
  });

  it('should be created', inject([GridpageService], (service: GridpageService) => {
    expect(service).toBeTruthy();
  }));
});
