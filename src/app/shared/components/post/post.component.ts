import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Post } from '../../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
 
  constructor() { }

  ngOnInit() {
  }

}
