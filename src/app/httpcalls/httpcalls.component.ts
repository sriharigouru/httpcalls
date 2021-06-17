
import {HttpcallserviceService} from './../services/httpcallservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpcalls',
  templateUrl: './httpcalls.component.html',
  styleUrls: ['./httpcalls.component.css']
})
export class HttpcallsComponent implements OnInit {

  posts: any[];
  

  constructor(private service:HttpcallserviceService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe(response => {
      this.posts = JSON.parse(JSON.stringify(response));
      console.log(this.posts);
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value, id: '' };
    input.value = "";
    
    this.service.createPost(JSON.stringify(post)).subscribe(responsee => {
      console.log(JSON.stringify(responsee));
      post['id'] = JSON.parse(JSON.stringify(responsee)).id;
      this.posts.splice(0, 0, post);

    });
  }

  updatePost(input: HTMLInputElement) {
    let post = { title: input.value, id: '' };
    input.value = "";
    this.service.patchPost( JSON.stringify(post)).subscribe(responsee => {
      console.log(JSON.stringify(responsee));
      post['id'] = JSON.parse(JSON.stringify(responsee)).id;
      this.posts.splice(0, 0, post);

    });
  }

  deletePost(input: HTMLInputElement) {
    let post = { title: input.value, id: '' };
    input.value = "";
   this.service.deletePost( post.id).subscribe(responsee => {
      console.log(JSON.stringify(responsee));
      post['id'] = JSON.parse(JSON.stringify(responsee)).id;
      this.posts.splice(0, 0, post);

    });
  }


}
