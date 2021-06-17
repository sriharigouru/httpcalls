import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpcallserviceService {
private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  getPosts()  {
    return this.http.get(this.url);
  }
  createPost(post:string){
    return this.http.post(this.url, post);
  }

  patchPost(post:string){
    return this.http.patch(this.url, post);
  }
  deletePost(id:string){
    return this.http.delete(this.url+"/"+id);
  }
}
