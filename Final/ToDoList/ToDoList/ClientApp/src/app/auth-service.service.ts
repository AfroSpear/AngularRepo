import { Injectable } from '@angular/core';
import { HttpErrorResponse , HttpEvent , HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
  export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errorMsg;
    if (err.error instanceof Error) {
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      errorMsg = `Backend return code ${err.status}, body was: ${err.error}`;
    }
    if (err.status === 404 || err.status === 403 || err.status == 401) {
      this.router.navigateByUrl(`/user/login`);
    }
    console.error(errorMsg);
    return throwError(err);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError(err => this.handleError(err)));
  }


}


