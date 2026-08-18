import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanizePropKey',
})
export class HumanizePropKeyPipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace(/([A-Z])/g, ' $1');

    const firstLetter = value.charAt(0).toUpperCase();
    const rest = value.slice(1);

    return `${firstLetter}${rest}`;

  }

}
