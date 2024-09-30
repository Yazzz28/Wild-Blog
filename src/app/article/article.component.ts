import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../models/article.model'; // Assurez-vous que le modèle est bien défini
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  // Injection du service ActivatedRoute pour capturer les paramètres de la route
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  
  // Liste des articles disponibles
  articles: Article[] = [
    {
      id: 1,
      title: "Titre de l'article 1",
      author: 'John Doe',
      content: 'Voici le contenu du premier article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 0,
    },
    {
      id: 2,
      title: "Titre de l'article 2",
      author: 'Jane Smith',
      content: 'Voici le contenu du deuxième article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 0,
    },
    {
      id: 3,
      title: "Titre de l'article 3",
      author: 'Alice Johnson',
      content: 'Voici le contenu du troisième article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 0,
    },
  ];

  // Article sélectionné selon l'ID dans l'URL
  article?: Article;

  constructor() {}

  ngOnInit() {
    // Abonnement aux changements de paramètres dans l'URL
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Extraction de l'ID depuis les paramètres
      this.articleId = Number(params.get('id'));

      // Recherche de l'article correspondant
      this.article = this.articles.find((article) => article.id === this.articleId);
    });
  }

  // Méthode pour basculer l'état de publication d'un article
  togglePublication(): void {
    if (this.article) {
      this.article.isPublished = !this.article.isPublished;
    }
  }
}
