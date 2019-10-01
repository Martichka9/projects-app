import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'projects-list', component: ProjectsListComponent},
  {path: 'prj/:id', component: ProjectComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    ProjectsListComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
