import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoryResolverService } from './resolvers/story-resolver.service';
import { StorySummaryComponent } from './components/story-summary/story-summary.component';


const routes: Routes = [
  {
  path: '',
  component: AppComponent
  /* CAN'T RESOLVE DATA ON THE INITIAL COMPONENT,
  resolve: {
    stories: StoryResolverService
  }*/
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [AppComponent]
})
export class AppRoutingModule { }
