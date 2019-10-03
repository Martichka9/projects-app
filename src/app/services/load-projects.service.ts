import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from '../models/project.model';

const BASE_URL = "https://gist.githubusercontent.com/elena-gancheva/e2af742be620fefa0b0d81e36f7cd66c/raw/1407c899e0a1baca8cd9564f6d9668fd7e8909a6/data.json";

@Injectable({
  providedIn: 'root'
})
export class LoadProjectsService {

  constructor(private http : HttpClient) { }

  getAllProjects() : Observable<IProject[]>{
    return this.http.get<IProject[]>(BASE_URL);
  }
  
  prjToShow(width: number){
    switch (true) {
      case width < 560:
        return 3;
        break;
      case width < 1090:
        return 6;
        break;
      case width < 1350:
        return 8;
        break;
      default:
        return 10;
        break;
    }
    
  }
}
