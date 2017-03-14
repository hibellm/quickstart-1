import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  RWDdb:string[];
  showRWDdb: boolean;
  posts: post[];

  constructor(private PostsService: PostsService){
    this.name = 'Marcus Hibell';
    this.email= 'John.Smith@gmail.com'
    this.address={
      street: 'Mariasteinstrasse 77',
      city: 'Hofstetten',
      kanton:'So'
    }
    this.RWDdb =['CPRD','IPSOS','IMS'];
    this.showRWDdb = false;

     this.PostsService.getPosts().subscribe(posts =>{
       this.posts =posts;
     });
  }

  toggleRWDdb(){
    if(this.showRWDdb == true){
          this.showRWDdb = false;
        } else {
            this.showRWDdb = true;
          }
  }

    addRWD(db:any){
      this.RWDdb.push(db);
    }

    deleteRWD(i:any){
      this.RWDdb.splice(i,1);
    }

}

interface address{
  street: string;
  city: string;
  kanton: string;
}

interface post{
  id: number;
  title: string;
  body: string;
}
