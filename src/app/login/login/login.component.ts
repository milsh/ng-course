import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

class NirValidators {

  static isNir(control:AbstractControl){
    if(control.value !== 'nir'){
      return { notNir: true }
    }
    return null;
  }

}


@Component({
  selector: 'app-login',
  template: `
    <h1>LOGIN</h1>
    <form [formGroup]="loginForm"
          (ngSubmit)="login()">
      
      <input type="text"
             formControlName="username"
             placeholder="username">
      <pre>
        {{ username.errors | json }}
      </pre>
      
      <input type="password"
             *ngIf="username.valid"
             formControlName="password"
             placeholder="password">
      
      <button type="submit">login</button>
    </form>  
  `,
  styles: [`
    input.ng-invalid {background-color: red}
  `]
})
export class LoginComponent {

  public loginForm:FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        NirValidators.isNir,
        Validators.required
      ]),
      password: new FormControl()
    });
  }

  get username(): FormControl {
    return <FormControl>this.loginForm.get('username');
  }

  public login(){
    console.log(this.loginForm.value);
  }

}
