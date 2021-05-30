import { TestBed } from '@angular/core/testing';

import { MyApisService } from './my-apis.service';

describe('MyApisService', () => {
  let service: MyApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
