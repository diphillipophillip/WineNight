import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrep'
})
export class FilterPrepPipe implements PipeTransform {
  transform(value: any[], ...args: unknown[]): unknown {
    return value.filter(category => category.name === 'Preparation');
  }
}
