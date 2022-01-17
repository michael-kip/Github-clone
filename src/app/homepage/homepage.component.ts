import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { User } from '../user'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
