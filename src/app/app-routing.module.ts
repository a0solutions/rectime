import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ProjectsComponent } from './main-data-show/projects/projects.component';
import { TeamsComponent } from './main-data-show/teams/teams.component';
import { RectimeComponent } from './main-data-show/rectime/rectime.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'teams',
        component: TeamsComponent,
      },
      {
        path: 'rectime',
        component: RectimeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
