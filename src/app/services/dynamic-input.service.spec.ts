import { TestBed } from '@angular/core/testing';

import { DynamicInputService } from './dynamic-input.service';

describe('DynamicInputService', () => {
  let service: DynamicInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
