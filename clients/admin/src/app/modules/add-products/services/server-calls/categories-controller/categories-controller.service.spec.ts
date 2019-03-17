import { TestBed } from '@angular/core/testing';

import { CategoriesControllerService } from './categories-controller.service';

describe('CategoriesControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesControllerService = TestBed.get(CategoriesControllerService);
    expect(service).toBeTruthy();
  });
});
