import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/Class/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private httpClient:HttpClient) { }
  GetAllProject():Observable<any>{
    return this.httpClient.get<any>("https://localhost:7130/api/Project/Projects");
  }
  CreateProject(newProject:Project):Observable<Project>{
    return this.httpClient.post<Project>("https://localhost:7130/api/Project",newProject)
  }
  UpdateProject(editproject:Project):Observable<Project>{
    return this.httpClient.put<Project>("https://localhost:7130/api/Project",editproject)
  }
  DeleteProject(Id:number):Observable<any>{
    return this.httpClient.delete<any>("https://localhost:7130/api/Project/"+Id)
  }
}
