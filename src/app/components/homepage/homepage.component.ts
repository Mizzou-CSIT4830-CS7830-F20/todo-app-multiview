import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  todoForm = this.fb.group({
    todo: ['', Validators.required],
  });

  todoArray = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addTodo() {
    let value = this.todoForm.value.todo;
    if (value != '') {
      this.todoArray.push(value);
      console.log(this.todoArray);
      this.todoForm.reset();
    } else {
      alert('Todo Field Required!!');
    }
  }
  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log('delete item');
      }
    }
  }
  todoSubmit() {
    let value = this.todoForm.value.todo;
    if (value != '') {
      console.log(value);
      this.todoArray.push(value);
      this.todoForm.reset();
    } else {
      alert('Todo Field Reqired!!');
    }
  }
}
