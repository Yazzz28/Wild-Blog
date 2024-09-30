import { Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'article-details/:id', component: ArticleDetailsComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'login', component: SignupFormComponent },
    { path: '**', component: NotFoundComponent },
];
