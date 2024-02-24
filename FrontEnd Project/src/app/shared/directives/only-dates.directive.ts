import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOnlyDates]'
})
export class OnlyDatesDirective {

  // regx =/\b(19|[2-9][0-9])\d{2}-([0|1])\d-([0-3])\d\b/
  @HostBinding('autocomplete') public autocomplete;

  constructor() {
    this.autocomplete = 'off';


    
  }
  
  

  @HostListener('blur', ['$event']) public Date(e) {
    document.all ? e.keyCode : e.keyCode;
 
 

     if(  e.target.value <='1930-01-01'){

      e.target.value ='1930-01-01'
   

    }

     
  }
 
}
