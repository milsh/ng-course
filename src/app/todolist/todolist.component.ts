import { Component, OnInit } from '@angular/core';
import {TodolistService} from "./todolist";
import {Logger} from "../shared/logger.service";

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      
      <app-todolist-header [headerTitle]="title"
                           (itemAdded)="list.addItem($event)">
      </app-todolist-header>
      
      <app-todolist-main>
        <input class="toggle-all" type="checkbox">
        <app-todolist-list [items]="list.items"></app-todolist-list>
      </app-todolist-main>
      
      <app-todolist-footer></app-todolist-footer>
    </section>
  `,
})
export class TodolistComponent implements OnInit {

  public title: string;
  private list: TodolistService;

  constructor(list: TodolistService) {
    this.title = "TODOS";
    this.list  = list;
  }





  ngOnInit() {
  }

}
