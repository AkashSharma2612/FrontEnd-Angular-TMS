import { Component } from '@angular/core';
import { Team } from 'src/Class/team';
import { TeamService } from 'src/Service/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teamList: Team[] = [];
  newTeam: Team = new Team();
  editTeam: Team = new Team();

  constructor(private teamService: TeamService) {

  }
  ngOnInit(): void {
    // this.getAllProject();
    this.GetAll();
    // this.GetAllUser();
  }
  GetAll() {
    this.teamService.GetAllTeam().subscribe(
      (response) => {
        this.teamList = response;
        console.log(response);
      }, (error) => {
        console.log(error);
      })
  }
  SaveClick() {
    this.teamService.CreateTeam(this.newTeam).subscribe(
      (response) => {
        this.GetAll();
      },
      (error) => {
        console.log(error);
      })
  }
  editClick(e:any){

    this.editTeam=e;
  }
  Updateclick(){
    this.teamService.UpdateTeam(this.editTeam).subscribe((response)=>{
      this.GetAll();
    },(error) => {
      console.log(error);
    })
  }
  DeleteClick(id:number){ debugger    
    var ans=confirm('want to delete ? !!')
    if(!ans) return;
    
    this.teamService.DeleteTeam(id).subscribe(
      (response)=>{
        this.GetAll();
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}

