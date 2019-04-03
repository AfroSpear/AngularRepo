import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SearchResults } from '../search-results';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-rolodex',
  templateUrl: './user-rolodex.component.html',
  styleUrls: ['./user-rolodex.component.css']
})
export class UserRolodexComponent implements OnInit {

   private searchresults: SearchResults;

  constructor(private route: ActivatedRoute , private service: UserService) { }

  ngOnInit() {

    this.service.getUsers(1).subscribe((data: SearchResults) => this.searchresults = data)
  }

}
