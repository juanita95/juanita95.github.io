import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSplit'
})
export class CustomSplitPipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.split(character)[0];
  }

}
