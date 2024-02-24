import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-date',
  template: '',
})
export class CheckDateComponent  {
  expiration    =  formatDate(new  Date().setUTCHours(24), "yyyy-MM-dd", "en-US",) ;
  licenseIssue=  formatDate(new Date().setUTCHours(-24), "yyyy-MM-dd", "en-US") 
  
 
  
  getDateUtc(licenseExpirationDate){

    // console.log(licenseExpirationDate);
    const   date1: Date = new Date(formatDate(licenseExpirationDate, "yyyy-dd-MM", "en-US",));
    const   currentDate: Date = new Date();

    if(date1.getTime()<currentDate.getTime()){
      console.log("date1 is before current date")
    return false
    }else{
      return true

    }
    // if(date1.getTime()>currentDate.getTime()){
    //   console.log("date1 is after current date red")
    //   console.log(false);
      
    //   return false
    // }


 
  }
}
