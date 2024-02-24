import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

 

    transform(value: Date): any {
      console.log(value);
      // const currentYear = new Date().getFullYear();
      // const dobYear = value.getFullYear();     const age = currentYear - dobYear;
  
      return {id:212121,test :true};
   }
  }