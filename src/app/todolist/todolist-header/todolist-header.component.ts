import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todolist-header',
  templateUrl: './todolist-header.component.html',
  styleUrls: ['./todolist-header.component.less']
})
export class TodolistHeaderComponent  {
  @Input()
  public headerTitle: string;

  @Output()
  public itemAdded = new EventEmitter<string>();
}
