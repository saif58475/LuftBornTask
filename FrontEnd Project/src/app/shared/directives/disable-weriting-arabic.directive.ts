 
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableWeritingArabic]'
})
export class DisableWeritingArabicDirective {

 
    @HostBinding('autocomplete') public autocomplete;
  
    constructor() {
      this.autocomplete = 'off';
    }
  
    @HostListener('keypress', ['$event']) public disableKeys(e) {
      const stringAllow = /^[-\sa-zA-Z,0-9]+$/;
      let inputChar = e.key;
      if (!stringAllow.test(inputChar)) {
        e.preventDefault();
      }
    }
  }