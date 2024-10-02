import { Component } from '@angular/core';
import { Article } from './../../models/article.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: "Les nouveautés d'Angular 16 incluent...",
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 120,
    },
    {
      id: 2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 75,
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 200,
    },
  ];

  liked: string = '';

  handleNotification(message: any) {
    this.liked = message;
  }

  isNoPublication(): boolean {
    return this.articles.every((article) => !article.isPublished);
  }
}