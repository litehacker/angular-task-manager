import { Component, OnInit } from '@angular/core';
import { Task } from "./todo";

function generateID(): string {
  //generate ID
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < 8; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result
}

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})

export class TaskViewComponent implements OnInit {

  constructor() {  }
  
  taskTitle:string;
  taskDeadline:string;
  taskDescription:string;
  taskImg:string;
  dailyTaskList: Task[];
  weeklyTaskList: Task[];
  monthlyTaskList: Task[];
  
  ngOnInit(): void {
    //flash
    this.dailyTaskList = [];
    this.weeklyTaskList = [];
    this.monthlyTaskList = [];
    this.taskTitle = "";
    this.taskDeadline = "Günlük";
  }

  addTask(){
    console.log('Deadline: ' + this.taskDeadline);
    
    if(this.taskTitle!==""){
      if(this.taskDeadline=="Aylık"){
        console.log("atlik gorev eklenmistir");
        const newItem: Task = {
          title:this.taskTitle,
          description:this.taskDescription ? this.taskDescription :"Açıklama Yok...",
          complited:false,
          img:this.taskImg ? this.taskImg :"Diğer",
          id:generateID(),
          deadline:this.taskDeadline
        }
        this.monthlyTaskList.push(newItem)
      }
      else if(this.taskDeadline=="Haftalık"){
        console.log("haftalik gorev eklenmistir");
        const newItem: Task = {
          title:this.taskTitle,
          description:this.taskDescription ? this.taskDescription :"Açıklama Yok...",
          complited:false,
          img:this.taskImg ? this.taskImg :"Diğer",
          id:generateID(),
          deadline:this.taskDeadline
        }
        this.weeklyTaskList.push(newItem)
      }
      else {
        console.log("gunluk gorev eklenmistir");
        const newItem: Task = {
          title:this.taskTitle,
          description:this.taskDescription ? this.taskDescription :"Açıklama Yok...",
          complited:false,
          img:this.taskImg ? this.taskImg :"Diğer",
          id:generateID(),
          deadline:this.taskDeadline ? this.taskDeadline : "Günlük"
        }
        this.dailyTaskList.push(newItem)
      }
    }
    console.log(this.dailyTaskList);
  }

  taskCompleted(id:string):void{
    // make task completed
    this.dailyTaskList.filter(item => item.id === id)[0].complited=true;
  }
  weeklyTaskCompleted(id:string):void{
    // make task completed
    this.weeklyTaskList.filter(item => item.id === id)[0].complited=true;
  }
  monthlyTaskCompleted(id:string):void{
    // make task completed
    this.monthlyTaskList.filter(item => item.id === id)[0].complited=true;
  }

  taskNotCompleted(id:string):void{
    // make task NOT completed
    this.dailyTaskList.filter(item => item.id === id)[0].complited=false;
  }
  weeklyTaskNotCompleted(id:string):void{
    // make task NOT completed
    this.weeklyTaskList.filter(item => item.id === id)[0].complited=false;
  }
  monthlyTaskNotCompleted(id:string):void{
    // make task NOT completed
    this.monthlyTaskList.filter(item => item.id === id)[0].complited=false;
  }

  deleteItem(id:string):any{
    this.dailyTaskList = this.dailyTaskList.filter(item => item.id !== id);
  }
  deleteWeeklyItem(id:string):any{
    this.weeklyTaskList = this.weeklyTaskList.filter(item => item.id !== id);
  }
  deleteMonthlyItem(id:string):any{
    this.monthlyTaskList = this.monthlyTaskList.filter(item => item.id !== id);
  }
  
}
