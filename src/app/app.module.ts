import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtInterceptorService } from 'src/Service/jwt-interceptor.service';
import { TaskComponent } from './task/task.component';
import { TaskAssignComponent } from './task-assign/task-assign.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ProjectComponent,
    TeamComponent,
    LoginComponent,
    TaskComponent,
    TaskAssignComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser') as string).token : null;
        }
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
