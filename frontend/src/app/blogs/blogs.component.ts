import { Component, OnInit } from "@angular/core";
import { BlogService } from "../services/blog.service";

@Component({
    selector: 'blogs',
    template: `
    <h2>Blog Posts</h2>
    <div class="container">
        <div class="card" *ngFor="let post of blogsData[5]">
            <div class="card-body">
                <div class="card-img-top"><img src="{{ post.photo_url }}" alt="post image"></div>
                <div class="body">
                <div class="card-title"><h6>{{ post.title }}</h6></div>
                <div class="card-des">{{ post.description }}</div>
                </div>
            </div>
        </div>
    </div>
  `,
    styleUrls: ['./blogs.component.css']
})



export class blogsComponent implements OnInit {

    blogsData: any = [];

    constructor(
        private blogsService: BlogService
    ) { }

    ngOnInit(): void {
        this.blogsService.getPostData().subscribe(posts =>{
                this.blogsData = Object.values(posts)

                // console.log(posts);
                
                console.log(this.blogsData[5])
            
        })
    }
}


