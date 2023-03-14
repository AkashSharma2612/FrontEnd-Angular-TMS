import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/Class/team';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient:HttpClient) { }

 GetAllTeam():Observable<any>{
  return this.httpClient.get<any>("https://localhost:7130/api/Team")
 }
 CreateTeam(newTeam:Team):Observable<Team>{
  return this.httpClient.post<any>("https://localhost:7130/api/Team",newTeam)
 }
 UpdateTeam(editTeam:Team):Observable<Team>{
  return this.httpClient.put<Team>("https://localhost:7130/api/Team",editTeam)
 }
 DeleteTeam(id:number):Observable<any>{
  return this.httpClient.delete<any>("https://localhost:7130/api/Team/"+id)
 }
 
//  GetAllProject():Observable<any>{
//   return this.httpClient.get<any>("https://localhost:7147/api/Project")
//  }
//  GetAllApplicationUser(){
//   return this.httpClient.get<any>("https://localhost:7147/api/ApplicationUserRegister")
//  }
}
