import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {
  carouselItems = [
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
      articleUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
      title: 'First',
      text: '',
    },
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg',
      articleUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg',
      title: 'Second',
      text: '',
    },
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg',
      articleUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg',
      title: 'Third',
      text: '',
    },
    {
      imgUrl: 'https://i.pximg.net/img-master/img/2019/08/11/16/19/27/76199125_p15_master1200.jpg',
      articleUrl: 'https://i.pximg.net/img-master/img/2019/08/11/16/19/27/76199125_p15_master1200.jpg',
      title: 'Forth',
      text: '',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
