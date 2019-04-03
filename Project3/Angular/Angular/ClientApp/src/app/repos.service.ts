import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchResults, RepoResults } from './search-results';
import { Observable } from 'rxjs';

import { Repository, Commit, Issue } from './repository';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class ReposService {

  apiUrl: string = 'https://api.github.com'
  auth: string = 'token 473e0e0b20b68913a6d79ff48edf0554908e664a'

  header = {
    headers: new HttpHeaders({ 'Authorization': this.auth })
  }

  constructor(private http: HttpClient) { }

  searchForRepos(searchString: string, page: number): Observable<RepoResults> {
    var endpoint = `${this.apiUrl}/search/repositories?q=${searchString}&page=${page}&per_page=10`;
    return this.http.get<RepoResults>(endpoint, this.header);
  }



  searchForCommit(id: number): Observable<Commit[]> {  

    var endpoint = `${this.apiUrl}/repositories/${id}/commits?per_page=5`;
    return this.http.get<Commit[]>(endpoint, this.header);
  }


  searchForIssue(id: number, page: number): Observable<Issue[]> {

    var endpoint = `${this.apiUrl}/repositories/${id}/issues?page=${page}&per_page=10`;
    return this.http.get<Issue[]>(endpoint, this.header);
  }





  getRepo(id: number): Observable<Repository> {
    var endpoint = `${this.apiUrl}/repositories/${id}`;
    return this.http.get<Repository>(endpoint);
  }
 
}
