

export class Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  forks: number;
  watchers: number;
  open_issues_count: number;
  stargazers_count: number;
  languages_url: string;
  clone_url: string;
}

export class Commit {
  sha: string;
  comment_count: number;
  message: string;
  author: Author;
  html_url: string;

}

export class Author {

  name: string;
  email: string;
  date: Date;
}

export class Issue {

  title: string;
  created_at: string;
  html_url: string;

}



