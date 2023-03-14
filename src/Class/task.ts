export class Task {
    id: number;
    title: string;
    dueDate: Date;
    isComplete:boolean;
    projectId: number;
    projectName:Array<string>;

    constructor() {
        this.id =0;
        this.title ="";
        this.dueDate =new Date();
        this.isComplete=true;
        this.projectId =0;
        this.projectName=[];
    }
}
