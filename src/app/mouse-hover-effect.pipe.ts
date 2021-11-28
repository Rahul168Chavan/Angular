import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mouseHoverEffect'
})
export class MouseHoverEffectPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
