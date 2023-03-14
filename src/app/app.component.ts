import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/Service/login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'Task_Management_System_1';
  constructor(public loginservice:LoginService){
             
  }
  logoutclick(){
    this.loginservice.logout()
  }
}
