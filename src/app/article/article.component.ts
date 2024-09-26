import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})

export class ArticleComponent {
  articles: Article[] = [
    {
      title: "Titre de l'article 1",
      author: 'John Doe',
      content: 'Voici le contenu du premier article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 0,
    },
    {
      title: "Titre de l'article 2",
      author: 'Jane Smith',
      content: 'Voici le contenu du deuxième article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 0,
    },
    {
      title: "Titre de l'article 3",
      author: 'Alice Johnson',
      content: 'Voici le contenu du troisième article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 0,
    },
  ];

  // Méthode pour basculer l'état de publication d'un article
  togglePublication(index: number): void {
    this.articles[index].isPublished = !this.articles[index].isPublished;
  }
}
