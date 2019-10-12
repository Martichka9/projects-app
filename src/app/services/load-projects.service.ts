import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadProjectsService {

  constructor() { }

  prjToShow(width: number){
    switch (true) {
      case width <= 560:
        return 4;
        break;
      case width <= 1366:
        return 6;
        break;
      default:
        return 9;
        break;
    }
  }
}
