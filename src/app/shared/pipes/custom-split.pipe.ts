import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSplit'
})
export class CustomSplitPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    const [character] = args
    return value.split(character)[0];
  }

}
