import { Component, OnInit } from '@angular/core';
import { Story } from './models/story.model';
import { inherits } from 'util';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { StoryService } from './services/story.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Hacker News API Jon Frazier';
  stories: Story[] = [];

  constructor(private storyService: StoryService) {
  }

  ngOnInit() {
    this.initializeStorySummaries();
  }

  private initializeStorySummaries() {
    this.storyService.getStories().subscribe(x => {
      this.stories = x as Story[];
    });
  }
}
