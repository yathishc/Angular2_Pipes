import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters',
  pure:false
})
export class FiltersPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value.length == 0 ){
      return null;
    }
    let array= [];

    for (let item of value)
    {
        if(item.match('^.*'+args[0]+ '.*$'))
        {
          array.push(item);
        }
    }
    return array;
  }

}
