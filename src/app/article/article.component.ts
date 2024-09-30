import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ne pas importer ArticleComponent ici
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article?: Article;

  @Output() liked = new EventEmitter<string>();

  togglePublication(): void {
    if (this.article) {
      this.article.isPublished = !this.article.isPublished;
    }
  }

  sendNotification(): void {
    if (this.article) {
      this.liked.emit(`L'article ${this.article.title} vient d'être liké`);
    }
  }  
}
