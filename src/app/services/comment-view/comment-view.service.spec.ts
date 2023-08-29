import { TestBed } from '@angular/core/testing';

import { CommentViewService } from './comment-view.service';

describe('CommentViewService', () => {
  let service: CommentViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
