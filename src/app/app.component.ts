import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './component/article/article.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, CommonModule, ArticleComponent, HomePageComponent, RouterModule, NavbarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wild-blog';
  name = 'Yacine';
}
