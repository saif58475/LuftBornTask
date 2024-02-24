
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})
export class MyAccountComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit() { }
  
  logout() {
    const role = +localStorage.getItem("Authorization");
    localStorage.clear();
    this._Router.navigate(["/"]);
  }
}
