import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SearchResults, RepoResults } from '../search-results';
import { User } from '../user';
import { ReposService } from '../repos.service';
import { Repository } from '../repository';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchString: string;
  searchResults: User[];
  searchFail: boolean = false;
  
  repoResults: Repository[];

  searchresults: SearchResults;
  private currentPage: number = 1;



  loading: boolean = false;

  constructor(private userService : UserService , private reposService : ReposService ) { }

  ngOnInit() {
  }



  search() {

    this.loading = true;


    this.userService.searchForUsers(this.searchString, this.currentPage)

      .subscribe((data: SearchResults) => { this.searchResults = data.items; this.loading = false; }
     , (error: any) => { console.log(error); this.searchFail = true; this.loading = false; } );
   

  }
  

  search2() {

    this.loading = true;

    this.reposService.searchForRepos(this.searchString, this.currentPage)

      .subscribe((data: RepoResults) => { this.repoResults = data.items; this.loading = false; }
      ,  (error: any) => { console.log(error); this.searchFail = true; this.loading = false; });
   
  }


  refresh() {

    this.userService.searchForUsers(this.searchString, this.currentPage)

      .subscribe((data: SearchResults) => { this.searchResults = data.items; this.loading = false; });
  }

  refreshRepo() {
    this.reposService.searchForRepos(this.searchString, this.currentPage)

      .subscribe((data: RepoResults) => { this.repoResults = data.items; this.loading = false; });
  }


  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.refresh();
  }

  previousPage() {
    this.currentPage = this.currentPage - 1;
    this.refresh();
  }

  nextR() {
    this.currentPage = this.currentPage + 1;
    this.refreshRepo();
  }

  previousR() {
    this.currentPage = this.currentPage - 1;
    this.refreshRepo();
  }

}
