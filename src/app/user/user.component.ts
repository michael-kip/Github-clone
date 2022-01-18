import { Component, OnInit } from '@angular/core';
import { SearchService } from '../Services/search.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  public myGitName = 'michael-kip';
  public githubUser!: string;
    public users!:any;
  user: any;

  username: string = 'michael-kip'
    
  constructor(private myService:SearchService) { }


  findUser () {
    this.myService.UpdateUser(this.username);
    this.myService.getUser().subscribe((user:any) => {
      console.log(user);
      this.user = user;
    });

  }

  ngOnInit(): void {
  }

}
