import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskAssign } from 'src/Class/task-assign';

@Injectable({
  providedIn: 'root'
})
export class TaskassignService {

  constructor(private httpClient: HttpClient) { }
  getAllInformtion(): Observable<any> {
    return this.httpClient.get<any>("https://localhost:7130/api/TaskInformation");

  }
  GetProjectList(): Observable<any> {
    return this.httpClient.get<any>("https://localhost:7130/api/Project/Projects")
  }
  getTeamsList(): Observable<any> {
    return this.httpClient.get<any>("https://localhost:7130/api/Team")
  }
  GetUsersList(): Observable<any> {
    return this.httpClient.get<any>("https://localhost:7130/api/Account")
  }
  GetTask(): Observable<any> {
    return this.httpClient.get("https://localhost:7130/api/Task")
  }
  saveInfo(newInfo:TaskAssign):Observable<any>
  {debugger
   return this.httpClient.post<any>("https://localhost:7130/api/TaskInformation",newInfo)
  }
}
