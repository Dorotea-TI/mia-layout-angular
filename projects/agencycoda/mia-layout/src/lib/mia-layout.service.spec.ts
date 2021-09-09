import { TestBed } from '@angular/core/testing';

import { MiaLayoutService } from './mia-layout.service';

describe('MiaLayoutService', () => {
  let service: MiaLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
