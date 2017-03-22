import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TodolistModule} from "./todolist/todolist.module";
import {LoginModule} from "./login/login.module";

@NgModule({
  imports     : [BrowserModule, TodolistModule, LoginModule],
  declarations: [AppComponent],
  bootstrap   : [AppComponent]
})

export class AppModule {

  constructor() {
    console.log('AppModule instance');
  }
}