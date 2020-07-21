import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private httpClient: HttpClient) {}
  getAllBlogPosts(): Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>('/api/get-blog-posts');
  }
}
