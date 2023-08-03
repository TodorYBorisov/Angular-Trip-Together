import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConvertor'
})
export class TempConvertorPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round((value - 32) / 1.8);
  }
}
