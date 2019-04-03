import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../user';
import { SearchResults, RepoResults } from '../search-results';
import { ReposService } from '../repos.service';
import { Repository } from '../repository';




@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private user: User;
  searchString: string;
  repoResults: Repository[];
  follower: User[];
  loading: boolean = false;

  constructor(private route: ActivatedRoute,
    private service: UserService) { }

  ngOnInit() {

    this.loading = true;




    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getUser(Number(params.get('id'))))
    ).subscribe((data: User) => {
      this.user = data

      this.loading = false

      this.service.searchForUsersRepo(this.user.login)

        .subscribe((data: Repository[]) => { this.repoResults = data });

      this.service.searchForUsersFollow(this.user.login)

        .subscribe((data: User[]) => { this.follower = data });


    });


    

     

  }

  

}
