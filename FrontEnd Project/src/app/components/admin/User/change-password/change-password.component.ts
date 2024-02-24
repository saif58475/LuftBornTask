import { stringify } from '@angular/compiler/src/util';
import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styles: [
  ]
})
export class ChangePasswordComponent implements OnInit {

  

  constructor(private fb: FormBuilder, private _router:Router) {}
  ngOnInit(): void { }




    
  onSubmit() {
  }


}
