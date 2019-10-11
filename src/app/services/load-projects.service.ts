import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class LoadProjectsService {

  constructor() { }

  prjToShow(width: number){
    switch (true) {
      case width < 560:
        return 3;
        break;
      case width < 1090:
        return 6;
        break;
      case width < 1024:
        return 8;
        break;
      default:
        return 10;
        break;
    }
  }

  jobsToShow(width: number){
    switch (true) {
      case width < 560:
        return 3;
        break;
      case width < 1090:
        return 6;
        break;
      case width < 1024:
        return 8;
        break;
      default:
        return 10;
        break;
    }
    
  }
}
