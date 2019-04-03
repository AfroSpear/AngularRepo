import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ReposService } from '../repos.service';
import { Repository, Commit, Issue } from '../repository';
import { SearchResults } from '../search-results';
import { User } from '../user';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {

  private repo: Repository;

  user: User;

  commit: Commit[];

  issue: Issue[];
  private currentPage: number = 1;
  constructor(private route: ActivatedRoute, private service: ReposService) { }

  ngOnInit() {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRepo(Number(params.get('id'))))
    ).subscribe((data: Repository) => {
        this.repo = data

      

      this.service.searchForCommit(this.repo.id)

        .subscribe((data: Commit[]) => { this.commit = data });

      this.service.searchForIssue(this.repo.id, this.currentPage)

        .subscribe((data: Issue[]) => { this.issue = data });


      });

  }


  refreshing() {
    this.service.searchForIssue(this.repo.id, this.currentPage)

      .subscribe((data: Issue[]) => { this.issue = data });
  }

  nextPaging() {
    this.currentPage = this.currentPage + 1;
    this.refreshing();
  }

  previousPaging() {
    this.currentPage = this.currentPage - 1;
    this.refreshing();
  }

}
