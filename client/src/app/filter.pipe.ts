import { Pipe, PipeTransform } from '@angular/core';
import { User } from './dashboard/user'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(games: Array<User>, search_text?: string): Array<User> {
    if(!search_text){ return games }

    search_text = search_text.toLowerCase()
    
    
    return games.filter(user => user.name.toLowerCase().includes(search_text) ||
    String(user.score).includes(search_text) || String(user.percent).includes(search_text));
  }

}
