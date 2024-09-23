import { Component } from '@angular/core';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss'
  
})
export class ArticleComponentComponent {
  title = 'Titre personnaliser';
  content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil velit modiaut neque illum obcaecati odio dicta maxime, assumenda fuga nesciunt nemonobis ullam earum optio, cumque cum ipsam. Tempora.';
}
