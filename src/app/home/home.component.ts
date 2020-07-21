import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../http_services/blog-post.service';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogPosts: BlogPost[];

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.blogPostService.getAllBlogPosts().subscribe((blogPosts: BlogPost[]) => {
      this.blogPosts = blogPosts;
    });
  }

}
