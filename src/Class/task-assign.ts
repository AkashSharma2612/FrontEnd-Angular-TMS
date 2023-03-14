export class TaskAssign {
    projectIds:number;
    projectsName:any;
    teamId:number;
    teamNames:any;
    applicationUserId:any;
    applicationUserName:any;
    tasksName:any
    date:Date;
    isCompleted:boolean;

    constructor(){
        this.projectIds=0;
        this.teamId=0;
        this.date=new Date();
        this.isCompleted=true;


    }
}
