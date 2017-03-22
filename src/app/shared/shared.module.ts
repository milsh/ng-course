import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpPipe } from './up.pipe';
import {Logger} from "./logger.service";
import { MarkerDirective } from './marker.directive';
import { AutofocusDirective } from './autofocus.directive';
import { IfDirective } from './if.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [Logger],
  declarations: [UpPipe, MarkerDirective, AutofocusDirective, IfDirective],
  exports: [UpPipe, MarkerDirective, AutofocusDirective, IfDirective]
})
export class SharedModule { }
