import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { NavService, Menu } from '../../../../services/nav.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  public language: boolean = false;

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },{
    language: 'Arabic',
    code: 'ar',
    type: 'EG',
    icon: 'sa'
  },
 ]

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }
  
  constructor(private translate: TranslateService,public layout: LayoutService,
    public navServices: NavService) { }

  ngOnInit() {
  }

  changeLanguage(lang) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
    this.layout.language=lang.code
    console.log(  this.layout.language);

    if (lang.code=='ar') {
      this.customizeLayoutType('rtl') 

    } else {
      this.customizeLayoutType('ltr') 
      
    }
  }

  public layoutType: string = 'ltr';


  customizeLayoutType(val) {
    this.layoutType = val;
    console.log(val)
    this.layout.config.settings.layout_type = val;
    if(val == 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
    } else {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
    }
  }

}
