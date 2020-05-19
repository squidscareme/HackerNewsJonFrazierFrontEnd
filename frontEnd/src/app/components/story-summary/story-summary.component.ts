import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/models/story.model';
import * as moment from 'moment';

@Component({
  selector: 'app-story-summary',
  templateUrl: './story-summary.component.html',
  styleUrls: ['./story-summary.component.css']
})
export class StorySummaryComponent implements OnInit {

  @Input() story: Story;

  constructor() { }

  ngOnInit(): void {
  }

  convertUnixDateToFormattedDate(unixDate): string {
    const date = moment.unix(unixDate);
    return date.format('MMMM Do YYYY, h:mm:ss a');
  }

  storyHasNoLink(story: Story) {
    return !(story || { }).url;
  }
}
