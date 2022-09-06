import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter()
  title = ""
  desc = ""
  constructor() { }

  ngOnInit(): void {
  }
  SubmitData() {
    let todo = {
      sr: 1,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.addTodo.emit(todo)
  }
}
