import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  users!: User;
  githubusername:string="michael-kip";
  repoName!: string;
  srepoos: any;

  username!: string;


  constructor() { }
}
