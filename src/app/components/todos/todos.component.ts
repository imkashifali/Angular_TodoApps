import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localitem:any
  todos: Todo[];


  constructor() {
    this.localitem = localStorage.getItem("todos");

    if(this.localitem == null){
      this.todos=[]
    }else{
      this.todos = JSON.parse(this.localitem)
    }



  }

  ngOnInit(): void {
    // this.todos = [
    //   {
    //     sr: 1,
    //     title: "First time",
    //     desc: "hello are y",
    //     active: true
    //   },
    //   {
    //     sr: 2,
    //     title: "First time",
    //     desc: "hello are y",
    //     active: true
    //   },
    //   {
    //     sr: 3,
    //     title: "Third time",
    //     desc: "hello are y",
    //     active: true
    //   },
    // ]
  }
  deletetodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
