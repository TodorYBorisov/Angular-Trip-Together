import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { TempConvertorPipe } from './pipes/temp-convertor.pipe';


@NgModule({
  declarations: [
    LoaderComponent,
    ElapsedTimePipe,
    TempConvertorPipe,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoaderComponent,
    ElapsedTimePipe,
    TempConvertorPipe
  ]
})
export class SharedModule { }
