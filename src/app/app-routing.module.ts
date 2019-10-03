import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'projects-list', component: ProjectsListComponent},
  {path: 'projects-list/:id', component: ProjectComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    ProjectsListComponent
  ],
  imports: [
    CommonModule, 
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
