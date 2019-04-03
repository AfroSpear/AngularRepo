import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchResults, RepoResults } from './search-results';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl: string = 'https://api.github.com'
  auth: string = 'token 473e0e0b20b68913a6d79ff48edf0554908e664a'

  header = {
    headers: new HttpHeaders({'Authorization':this.auth}) 
    }

  constructor(private http: HttpClient) { }

  searchForUsers(searchString: string, page: number): Observable<SearchResults> {
    var endpoint = `${this.apiUrl}/search/users?q=${searchString}&page=${page}&per_page=10`;
    return this.http.get<SearchResults>(endpoint, this.header);
  }

  searchForUsersRepo(login: string): Observable<Repository[]> {
    var endpoint = `${this.apiUrl}/users/${login}/repos`;
   return this.http.get<Repository[]>(endpoint, this.header);
  }

  searchForUsersFollow(login: string): Observable<User[]> {
    var endpoint = `${this.apiUrl}/users/${login}/followers`;
    return this.http.get<User[]>(endpoint, this.header);
  }

  //searchForUsersFollowers(login: string): Observable<SearchResults> {
  //  var endpoint = `${this.apiUrl}/search/users/${login}/followers`;
   // return this.http.get<SearchResults>(endpoint, this.header);
 // }


  getUser(id: number): Observable<User> {
    var endpoint = `${this.apiUrl}/user/${id}`;
    return this.http.get<User>(endpoint, this.header);
  }

  getUsers(page: number): Observable<SearchResults> {
    var endpoint = `${this.apiUrl}/user?page=${page}&per_page=10`;
    return this.http.get<SearchResults>(endpoint, this.header);
  }



}
