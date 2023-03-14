import { Component } from '@angular/core';
import { Project } from 'src/Class/project';
import { Task } from 'src/Class/task';

import { TaskService } from 'src/Service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
    projectList:Project[]=[];
    taskList:Task[]=[];
    newTask:Task=new Task();
    editTask:Task=new Task();
  constructor(private taskService:TaskService){

    }

   ngOnInit(){
    this.GetAllTasks();
    this.GetAllProjects();

   }  

   GetAllTasks(){
    this.taskService.GetAllTask().subscribe((response)=>{
      this.taskList=response;
      console.log(response);
      
    },(error)=>{
      console.log(error);
    })
  }
  GetAllProjects(){
    this.taskService.getAllprojects().subscribe((response)=>{
      this.projectList=response;
      console.log(response);
      
    },(error)=>{
      console.log(error);
      
    })
  }
  AddNewTask(){ debugger
    this.taskService.AddTask(this.newTask).subscribe((response)=>{
     this.taskList=response;
     console.log(response);
     
    },(error)=>{
      console.log(error);
      
    })
  }
  EditClick(e:any){
    this.editTask=e;
  }
  UpdateClick(){
    this.taskService.updateTask(this.editTask).subscribe((response)=>{
      this.taskList=response;
      console.log(response);
      
     },(error)=>{
       console.log(error);
       
     })

  }
  DeleteClick(id:number){debugger
    this.taskService.DeleteTask(id).subscribe((response)=>{
      this.taskList=response;
      console.log(response);
      
     },(error)=>{
       console.log(error);
       
     })
  }  
}
