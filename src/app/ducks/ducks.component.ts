import { Component, OnInit } from '@angular/core';
import { Ducks } from '../interfaces/ducks';

@Component({
  selector: 'app-ducks',
  templateUrl: './ducks.component.html',
  styleUrls: ['./ducks.component.css']
})
export class DucksComponent implements OnInit {

  ducks: Ducks[] = [
    {
      
        name: 'Bob'
      
    },

    {
      
      name: 'Charlie'
    
    },

    {
      
       name: 'Frank'
  
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
