import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Story } from '../models/story.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoryService } from '../services/story.service';

@Injectable({ providedIn: 'root' })
export class StoryResolverService implements Resolve<Story[]> {

  constructor(private storyService: StoryService, private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot){
    return this.storyService.getStories().pipe(map(x => {
      return x as Story[];
    }));
  }
}
