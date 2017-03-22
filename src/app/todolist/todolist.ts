import {Item} from "./item";
import {Logger} from "../shared/logger.service";
import {Injectable} from "@angular/core";


@Injectable()
export class TodolistService {
  private _items: Item[];

  constructor(logger: Logger) {
    this._items = [];
    logger.log('TodolistService instance! ')
  }

  get items(): Item[] {
    return this._items;
  }

  public addItem(title: string):void {
    this._items.push(new Item(title));
  }

  public removeItem(item: Item):void{
    const index = this._items.indexOf(item);
    this._items.splice(index , 1);
  }

  public toggle(item: Item): void {
    item.completed = !item.completed;
  }
















}