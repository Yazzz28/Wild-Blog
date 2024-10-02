import { Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { SignupFormComponent } from './component/signup-form/signup-form.component';
import { ArtcleDetailComponent } from './component/artcle-detail/artcle-detail.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:id', component: ArtcleDetailComponent},
  { path: 'contact', component: ContactFormComponent },
  { path: 'login', component: SignupFormComponent },
  { path: '**', component: NotFoundComponent },
];
