import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { LocalTodoRolodexComponent } from './local-todo-rolodex/local-todo-rolodex.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthInterceptor } from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CreateTodoComponent,
    LocalTodoRolodexComponent,
    UserCreateComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'todo/create', component: CreateTodoComponent },
      { path: 'todo/update/:id', component: CreateTodoComponent },
      { path: 'localtodos', component: LocalTodoRolodexComponent },
      { path: 'user/create', component: UserCreateComponent },
      { path: 'user/login', component: UserLoginComponent},

    ]),
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useFactory: function (router: Router) {
      return new AuthInterceptor(router);
    },
    multi: true,
    deps: [Router]
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
