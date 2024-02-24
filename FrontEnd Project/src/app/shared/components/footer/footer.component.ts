import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  EmployeeName:string = "";

  public today: number = Date.now();

  constructor() { 
    this.EmployeeName = localStorage.getItem('CamelgateName')
  }

  ngOnInit(): void {
  }

}
