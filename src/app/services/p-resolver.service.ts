import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IProject } from '../models/project.model';
import { Observable, throwError } from 'rxjs';
import { retry,catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "https://gist.githubusercontent.com/elena-gancheva/e2af742be620fefa0b0d81e36f7cd66c/raw/1407c899e0a1baca8cd9564f6d9668fd7e8909a6/data.json";

@Injectable({
  providedIn: 'root'
})
export class PResolver implements Resolve<Observable<any>>{

  constructor(private http : HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<any> {
    return this.http.get<IProject[]>(BASE_URL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
