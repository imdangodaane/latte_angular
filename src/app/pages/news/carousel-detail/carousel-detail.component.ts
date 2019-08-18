import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.scss']
})
export class CarouselDetailComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() articleUrl: string;
  @Input() title: string;
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
