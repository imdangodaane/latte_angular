import { Component, OnInit, Input } from '@angular/core';
// import { NewsPost } from '../../../_services/news.service';
// import { Article } from '../../../_models/Article';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  // @Input() post: NewsPost;
  @Input() article: any;

  constructor() { }

  ngOnInit() {
  }

}
