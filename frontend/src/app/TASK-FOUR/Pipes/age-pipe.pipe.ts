import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textPipe'
})
export class TextPipePipe implements PipeTransform {

  currentDate: Date = new Date();

  transform(value: string, textToAppend: string): string {
    return value + ' ' + textToAppend;
  }

}
