import {NumberService} from "./number.service";
import {TestBed} from "@angular/core/testing";


describe('NumberService', () => {
  let service: NumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
