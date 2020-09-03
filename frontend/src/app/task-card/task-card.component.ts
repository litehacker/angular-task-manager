import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})

export class TaskCardComponent implements OnInit {

  constructor() {
    console.log('task component created!')
  }
  
  private taskActive = true;
  private taskTitle = 'Default Task Title';
  private taskDesc = 'Default Task Description. Description of default task.';
  deadline = new Date();

  // Change Tasks states
  taskActiveTrue():void{
    this.taskActive = true;
  }
  taskActiveFalse():void{
    this.taskActive = false;
  }

  // Change Task Title
  changeTaskTitle(newTitle:string):void{
    this.taskTitle = newTitle;
  }
  // Change Task Description
  changeTaskDesc(newDesc:string):void{
    this.taskDesc= newDesc;
  }
  // Change Task Deadline
  changeTaskDeadline(newDeadline:Date):void{
    this.deadline = newDeadline;
  }

  checkTaskActive():boolean{
    return this.taskActive;
  }
  getTaskTitle():string{
    return this.taskTitle;
  }
  getTaskDesc():string{
    return this.taskDesc;
  }

  ngOnInit(): void {
  }
}
