import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artcle-detail',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './artcle-detail.component.html',
  styleUrl: './artcle-detail.component.scss'
})
export class ArtcleDetailComponent implements OnInit {

  route = inject(ActivatedRoute);
  articleId: number | null = null;
  article: Article | undefined;

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

  ngOnInit(): void {
    // Récupération de l'ID depuis l'URL
    this.route.params.subscribe(params => {
      this.articleId = +params['id']; // Convertit l'ID en nombre

      // Recherche de l'article correspondant à l'ID
      this.article = this.articles.find(article => article.id === this.articleId);
    });
  }

  togglePublication(): void {
    if (this.article) {
      this.article.isPublished = !this.article.isPublished;
    }
  }
}
