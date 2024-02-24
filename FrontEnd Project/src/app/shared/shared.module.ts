import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
 
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DragulaModule } from "ng2-dragula";
import { TranslateModule } from "@ngx-translate/core";
// Components
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { FeatherIconsComponent } from "./components/feather-icons/feather-icons.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { FullComponent } from "./components/layout/full/full.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TapToTopComponent } from "./components/tap-to-top/tap-to-top.component";
// Header Elements Components
import { SearchComponent } from "./components/header/elements/search/search.component";
import { MegaMenuComponent } from "./components/header/elements/mega-menu/mega-menu.component";
import { LanguagesComponent } from "./components/header/elements/languages/languages.component";
import { NotificationComponent } from "./components/header/elements/notification/notification.component";
import { BookmarkComponent } from "./components/header/elements/bookmark/bookmark.component";
import { CartComponent } from "./components/header/elements/cart/cart.component";
import { MessageBoxComponent } from "./components/header/elements/message-box/message-box.component";
import { MyAccountComponent } from "./components/header/elements/my-account/my-account.component";
// Directives
import { DisableKeyPressDirective } from "./directives/disable-key-press.directive";
import { OnlyAlphabetsDirective } from "./directives/only-alphabets.directive";
import { OnlyNumbersDirective } from "./directives/only-numbers.directive";
import { ShowOptionsDirective } from "./directives/show-options.directive";
import { OnlyDatesDirective } from './directives/only-dates.directive';
//product services

// Services
import { LayoutService } from "./services/layout.service";
import { NavService } from "./services/nav.service";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DisableWeritingEnglishDirective } from './directives/disable-weriting-english.directive';
import { DisableWeritingArabicDirective } from './directives/disable-weriting-arabic.directive';
 
import { ExpPipe } from './Pipes/exp.pipe';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Models/login/login.component';

import { CheckDateComponent } from './components/check-date/check-date.component';

@NgModule({
  declarations: [
 
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    BreadcrumbComponent,
    FeatherIconsComponent,
    FullComponent,
    ShowOptionsDirective,
    DisableKeyPressDirective,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    LoaderComponent,
    TapToTopComponent,
    SearchComponent,
    MegaMenuComponent,
    LanguagesComponent,
    NotificationComponent,
    BookmarkComponent,
    CartComponent,
    MessageBoxComponent,
    MyAccountComponent,
    OnlyDatesDirective,
    DisableWeritingEnglishDirective,
    DisableWeritingArabicDirective,
 
    ExpPipe,

    LoginComponent,
       CheckDateComponent,

  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgbModule,
    DragulaModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TranslateModule,

    NgSelectModule,
    TooltipModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [NavService, LayoutService],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    LoaderComponent,
    BreadcrumbComponent,
    FeatherIconsComponent,
    TapToTopComponent,
    DisableKeyPressDirective,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,OnlyDatesDirective,DisableWeritingEnglishDirective,DisableWeritingArabicDirective,
    NgbModule,
    BsDatepickerModule,
    ModalModule,
    NgSelectModule,
    TooltipModule,
    PaginationModule,ExpPipe
  ],
})
export class SharedModule {}
