import { Component, OnInit } from '@angular/core';
import { SearchService } from '../Services/search.service';
import { User } from '../Classes/user'; 
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userResults!:User
  repositoryResults:any;

  constructor(private myService:SearchService) { }

  ngOnInit(): void {
    this.myService.user().subscribe((gityResults:any)=>{
      this.userResults=gityResults
  },error=>{
    console.log("Shoking Error",error);
  })

  this.myService.fetchRepos().subscribe((RepositoryResults:any)=>{
    this.repositoryResults=RepositoryResults
       console.log("Repositories",RepositoryResults);
          
  },(error: any)=>{

    console.log("ResultsError",error);
    
  })
}


}
