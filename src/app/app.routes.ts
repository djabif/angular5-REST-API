import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostComponent }
];
