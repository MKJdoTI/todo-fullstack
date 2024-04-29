import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Todo } from './models/todo';
import { HttpBackend } from '@angular/common/http';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todo-fullstack';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  todoForm!: FormGroup;


  constructor(
    private _snackBar: MatSnackBar, 
    private FormBuilder: FormBuilder,
    private httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.todoForm = this.FormBuilder.group ({
      id: [''],
      name: [''],
      description: [''],
      completed: [''],
      

    })
  }

  openSnackBar() {
    this._snackBar.open('Test', 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }

  onSubmit (){
    if(this.todoForm.invalid){
    return;
    }  
    const formValue: Todo = this.todoForm.value;
    const todoRequest: Todo = {
      name: formValue.name,
      description: formValue.description,
      completed: false
    
    }
    this.httpService.createTodo(todoRequest).subscribe((data)=>{} )
  }
}
    