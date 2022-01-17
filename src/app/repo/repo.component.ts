import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Repository} from '../repository';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  fetchrrr!:any;
  fetched!: string;
  r = false;

  constructor() { }

  ngOnInit(): void {
  }

}
