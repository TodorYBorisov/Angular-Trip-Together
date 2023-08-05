import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { TempConvertorPipe } from './pipes/temp-convertor.pipe';


@NgModule({
  declarations: [
    LoaderComponent,
    TempConvertorPipe,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoaderComponent,
    TempConvertorPipe
  ]
})
export class SharedModule { }
