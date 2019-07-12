import { TestBed } from '@angular/core/testing';

import { TitleShareService } from './title-share.service';

describe('TitleShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitleShareService = TestBed.get(TitleShareService);
    expect(service).toBeTruthy();
  });
});
