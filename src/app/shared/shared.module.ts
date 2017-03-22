import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpPipe } from './up.pipe';
import {Logger} from "./logger.service";


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [Logger],
  declarations: [UpPipe],
  exports: [UpPipe]
})
export class SharedModule { }
