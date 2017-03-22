import { Component, OnInit } from '@angular/core';
import {TodolistService} from "../todolist";

@Component({
  selector: 'app-todolist-main',
  templateUrl: './todolist-main.component.html',
  styleUrls: ['./todolist-main.component.less']
})
export class TodolistMainComponent {

  public print(value){
    console.log(value);
  }


}
