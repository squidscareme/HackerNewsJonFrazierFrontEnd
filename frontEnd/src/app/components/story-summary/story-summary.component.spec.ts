import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StorySummaryComponent } from './story-summary.component';
import { StoryService } from 'src/app/services/story.service';

describe('StorySummaryComponent', () => {
  let component: StorySummaryComponent;
  let fixture: ComponentFixture<StorySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorySummaryComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [StoryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
