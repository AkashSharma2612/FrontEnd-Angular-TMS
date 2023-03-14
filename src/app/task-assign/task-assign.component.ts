import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';
import { Project } from 'src/Class/project';
import { Task } from 'src/Class/task';
import { TaskAssign } from 'src/Class/task-assign';
import { Team } from 'src/Class/team';
import { TaskassignService } from 'src/Service/taskassign.service';

@Component({
  selector: 'app-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.scss']
})
export class TaskAssignComponent {

  inforamtionList:TaskAssign[]=[];
  teamList:Team[]=[];
  dropdownSettingForTeam:IDropdownSettings={}
  selectproject:Project[]=[];
  newInfo:TaskAssign=new TaskAssign();
  UserList:any[]=[];
  dropdownSettingForUser:IDropdownSettings={}
  dropdownSettingForTask:IDropdownSettings={}
  tasklist:Task[]=[];
  teamForm !:FormGroup;
  constructor(private taskAssignService:TaskassignService,private fb:FormBuilder){ }
 
  ngOnInit(){
   this.GetAllInformatiom();
   this.getAllProjects();
  this. DropDownSettingForTeam();
  this.DropDownSettingForUser();
  this.getAllTeams();
  this.getUsetList();
  this.getAllTask();
  this.DropDownSettingForTasks();
  { 
    this.teamForm=this.fb.group({
      id:[],
      name:['',Validators.required]
    })
   }
  }

  GetAllInformatiom(){
    this.taskAssignService.getAllInformtion().subscribe((response)=>{
      this.inforamtionList=response; 
      console.log(response);
      
    },(error )=>{
      console.log(error);
    })
  }
  SaveClick(){
    debugger
    this.taskAssignService.saveInfo(this.newInfo).subscribe((response)=>{
      this.inforamtionList=response
      
    })
  }
  getAllProjects(){
    this.taskAssignService.GetProjectList().subscribe((response)=>{
      this.selectproject=response.map((x:Project) => {
        return { id: x.id, name: x.name };
      });
      console.log(this.selectproject);
      console.log(response);
      
    },(error )=>{
      console.log(error);
    })
  }
    getAllTeams(){
   this.taskAssignService.getTeamsList().subscribe((response)=>{
    this.teamList=response.map((x:Team)=>{
      return{id:x.id,name:x.name};
    });
   },(error )=>{
    console.log(error);
  })
  }
  getUsetList(){
    this.taskAssignService.GetUsersList().subscribe((response)=>{
      console.log(response);
      this.UserList=response.map((x:any)=>{
        return{id:x.id,userName:x.userName};
      });
    },(error )=>{
      console.log(error);
    })
  }
  getAllTask(){
    this.taskAssignService.GetTask().subscribe((response)=>{
      console.log(response);
      // this.tasklist=response
      this.tasklist=response.map((x:Task)=>{
        return{id:x.id,title:x.title};
      });
    },(error )=>{
      console.log(error);
    })
  }
   DropDownSettingForTeam(){
    this.dropdownSettingForTeam={
      idField: 'id',
      textField: 'name',
      enableCheckAll: true,
      selectAllText: "Select All Teams",
      unSelectAllText: "UnSelect All Teams",
      allowSearchFilter: true
    }
   } 
   DropDownSettingForUser(){
    this.dropdownSettingForUser={
      idField: 'id',
      textField: 'userName',
      enableCheckAll: true,
      selectAllText: "Select All user",
      unSelectAllText: "UnSelect All User",
      allowSearchFilter: true
    }
   } 
   DropDownSettingForTasks(){
    this.dropdownSettingForTask={
      idField: 'id',
      textField: 'title',
      enableCheckAll: true,
      selectAllText: "Select All Task",
      unSelectAllText: "UnSelect All Task",
      allowSearchFilter: true
    }
   } 
   
}
