import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss',
})
export class ArticleDetailsComponent {
  // Injection du service ActivatedRoute pour capturer les paramètres de la route
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  // Article sélectionné selon l'ID dans l'URL
  @Input() article?: Article;

  // Méthode pour basculer l'état de publication d'un article
  togglePublication(): void {
    if (this.article) {
      this.article.isPublished = !this.article.isPublished;
    }
  }
}
