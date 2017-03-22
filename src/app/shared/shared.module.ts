import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpPipe } from './up.pipe';
import {Logger} from "./logger.service";
import { MarkerDirective } from './marker.directive';
import { AutofocusDirective } from './autofocus.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [Logger],
  declarations: [UpPipe, MarkerDirective, AutofocusDirective],
  exports: [UpPipe, MarkerDirective, AutofocusDirective]
})
export class SharedModule { }
