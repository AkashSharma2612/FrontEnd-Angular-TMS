import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Project } from 'src/Class/project';
import { ProjectService } from 'src/Service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
 
  projectList:Project[]=[];
  newProject:Project=new Project();
  editproject:Project=new Project ();
  constructor(private projectService:ProjectService){}
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.projectService.GetAllProject().subscribe((response)=>{
      this.projectList=response
      console.log(this.projectList)
    },(error)=>{
      console.log(error);
    })

  }
  saveClick(){
    this.projectService.CreateProject(this.newProject).subscribe(
      (response)=>{
        this.getAll();
      },
      (error)=>{
        console.log(error);
      })
  }
  EditClick(e:any){ debugger
    this.editproject=e;
  }
  Updateclick(){
    this.projectService.UpdateProject(this.editproject).subscribe((response)=>{
   this.getAll();
  },(error)=>{
    console.log(error)
  })
  }
  DeleteClick(Id:number){debugger
    var ans=confirm('want to delete ? !!')
    if(!ans) return;
    
    this.projectService.DeleteProject(Id).subscribe(
      (response)=>{
        this.getAll();
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
