import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';


@NgModule({
  declarations: [
    LoaderComponent,
    ElapsedTimePipe,

  ],
  imports: [
    CommonModule,
  ],
  exports: [LoaderComponent, ElapsedTimePipe]
})
export class SharedModule { }
