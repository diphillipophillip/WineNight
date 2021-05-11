import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], ...args: unknown[]): unknown {
    return value.filter(category => category.name !== 'Preparation');
  }
}
