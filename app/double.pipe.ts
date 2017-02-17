import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length== 0)
    {
      return value;
    }
    
    return  'Welcome '+value ;
  }

}
