import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ne pas importer ArticleComponent ici
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  // Injection du service ActivatedRoute pour capturer les paramètres de la route
  router: Router = inject(Router);

  // Article sélectionné selon l'ID dans l'URL
  @Input() article?: Article;

  goToDetails() {
    if (this.article) {
      this.router.navigate(['/article-details', this.article.id]);
    }
  }
}
