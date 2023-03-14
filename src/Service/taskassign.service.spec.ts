import { TestBed } from '@angular/core/testing';

import { TaskassignService } from './taskassign.service';

describe('TaskassignService', () => {
  let service: TaskassignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskassignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
