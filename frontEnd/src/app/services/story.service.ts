import { Injectable } from '@angular/core';
import { Story } from '../models/story.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }

  getStories(): Observable<any> {
     return this.http.get('api/stories/summaries');
  }
}
