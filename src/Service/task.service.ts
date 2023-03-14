import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/Class/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  GetAllTask():Observable<any>{
  return this.httpClient.get("https://localhost:7130/api/Task")
  }

  getAllprojects():Observable<any>{
    return this.httpClient.get("https://localhost:7130/api/Project/Projects")
  }

  AddTask(newTask:Task):Observable<any>{debugger
    return this.httpClient.post<Task>("https://localhost:7130/api/Task",newTask)
  }
  updateTask(editTask:Task):Observable<any>{
    return this.httpClient.put("https://localhost:7130/api/Task",editTask)
  }
  DeleteTask(id:number):Observable<any>{debugger
  return this.httpClient.delete("https://localhost:7130/api/Task/"+id)
  }
}
