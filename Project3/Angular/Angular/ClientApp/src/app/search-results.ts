import { SearchInfo } from "./search-info";
import { User } from "./user";
import { Repository } from "./repository";


export class SearchResults {
  info: SearchInfo;
  items: User[];
}

export class RepoResults {
  info: SearchInfo;
  items: Repository[];
}