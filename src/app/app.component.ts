import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, CommonModule, ArticleComponent, HomePageComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wild-blog';
  name = 'Yacine';
}
