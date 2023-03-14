import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveguardService } from 'src/Service/activeguard.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { RegisterComponent } from './register/register.component';
import { TaskAssignComponent } from './task-assign/task-assign.component';
import { TaskComponent } from './task/task.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "project", component: ProjectComponent, canActivate: [ActiveguardService] },
  { path: "team", component: TeamComponent, canActivate: [ActiveguardService] },
  { path: "task", component: TaskComponent ,canActivate:[ActiveguardService]},
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "taskAssign", component: TaskAssignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
