import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts:any;
  constructor(private service:PostService) {}
  myname:any;

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        console.log(response);
        //this.posts = response;
      });
  }

  onClick(value: string)
  {
    this.myname = value;
  }


  title = 'ang-app';
}
