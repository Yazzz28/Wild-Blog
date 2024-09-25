import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../models/article.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  user: User = {
    name: 'Yacine',
    isAdmin: true
  };

  articles: Article[] = [
    {
      title: "Titre de l'article 1",
      author: 'John Doe',
      content: 'Voici le contenu du premier article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: ''
    },
    {
      title: "Titre de l'article 2",
      author: 'Jane Smith',
      content: 'Voici le contenu du deuxième article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: ''
    },
    {
      title: "Titre de l'article 3",
      author: 'Alice Johnson',
      content: 'Voici le contenu du troisième article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: ''
    }
  ];

  // Méthode pour basculer l'état de publication d'un article
  togglePublication(index: number): void {
    this.articles[index].isPublished = !this.articles[index].isPublished;
  }

  // Méthode pour basculer l'état admin de l'utilisateur
  toggleIsAdmin(): void {
    this.user.isAdmin = !this.user.isAdmin;
  }
}
