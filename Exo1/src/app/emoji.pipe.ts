import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji',
  standalone: true,
})
export class EmojiPipe implements PipeTransform {
  transform(iRead: boolean): string {
    return iRead ? '👍' : '📖';
  }
}
