import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { UserComponent } from './user/user.component';

import { SearchComponent } from './search/search.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    UserComponent,

    SearchComponent,
    RepositoriesComponent,
    UserDetailComponent,
    RepoDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent, pathMatch: 'full' },
      { path: 'repositories', component: RepositoriesComponent },
     
      { path: 'user/:id', component: UserDetailComponent },
      { path: 'repository/:id', component: RepoDetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
