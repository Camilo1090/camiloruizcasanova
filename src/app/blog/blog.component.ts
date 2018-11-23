import { Component, OnInit } from '@angular/core';
import { butterService } from '../services/butterCMS.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    butterService.post.list({
      page: 1,
      page_size: 10
    })
      .then((res) => {
        console.log('Content from ButterCMS');
        console.log(res);
      });
  }

}
