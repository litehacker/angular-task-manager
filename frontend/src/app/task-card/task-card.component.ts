import { Component, OnInit, Input } from '@angular/core';

type TaskType = {
  title:string,
  description:string,
  deadline:Date,
  complited:boolean,
  img:string,
  id:string,
}

function generateID(): string {
  //generate ID
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result
}

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})

export class TaskCardComponent implements OnInit {

  sampleTaskChild:TaskType = {title:'this is a default title', description:'this a description string', deadline:new Date(), complited:false, img:'Diğer', id:generateID()};

  constructor() {
    console.log(this.sampleTaskChild.id)
  }

  // Change Tasks states
  taskActiveTrue():void{
    //task is active if the complited is false
    this.sampleTaskChild.complited = false;
  }
  taskActiveFalse():void{
    //task is not active if the complited is true
    this.sampleTaskChild.complited = true;
  }

  // Change Task Title
  changeTaskTitle(newTitle:string):void{
    this.sampleTaskChild.title = newTitle;
  }
  // Change Task Description
  changeTaskDesc(newDesc:string):void{
    this.sampleTaskChild.description= newDesc;
  }
  // Change Task Deadline
  changeTaskDeadline(newDeadline:Date):void{
    this.sampleTaskChild.deadline = newDeadline;
  }
  changeImage(newImg:string):void{
    this.sampleTaskChild.img = newImg;
  }
  checkTaskActive():boolean{
    //task active returns true if task is NOT completed
    return !this.sampleTaskChild.complited;
  }
  getTaskTitle():string{
    return this.sampleTaskChild.title;
  }
  getTaskImg():string{
    return this.sampleTaskChild.img;
  }
  getTaskDesc():string{
    return this.sampleTaskChild.description;
  }
  getTaskDate():Date{
    return this.sampleTaskChild.deadline;
  }
  getTaskID():string{
    return this.sampleTaskChild.id;
  }

  ngOnInit(): void {
  }
}
