import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoryResolverService } from './story-resolver.service';

describe('StoryResolverService', () => {
  let service: StoryResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]

    });
    service = TestBed.inject(StoryResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
