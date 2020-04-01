import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo[]= [
    {  

      task: 'Take Out Trash',

      completed: true

    },

    {
       task: 'Wash dishes',

       completed: false

    }, 
    
    {
      task: 'Vacuum each room',

      completed: false

    }, 

    {
      task: 'Meditate',

      completed: true

    },
    
    {
      
        task: 'Grocery Shop',
 
        completed: true

 
    },

    {
      task: 'Happy hour with friends',

      completed: false

   }, 

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
