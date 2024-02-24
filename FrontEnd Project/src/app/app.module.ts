import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {
  HttpClient,
  HttpClientModule,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { ErrorInterceptor } from './Interceptors/error.interceptor';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
// for HttpClient import:
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
// for Router import:
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
// for Core import:
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { TokenInterceptorService } from "./token-interceptor.service";
import { AppComponent } from "./app.component";

import { AdminModule } from "./components/admin/admin.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { DatePipe } from "@angular/common";

 import { NgxPaginationModule } from "ngx-pagination";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    // for HttpClient use:
    LoadingBarHttpClientModule,
    // for Router use:
    LoadingBarRouterModule,
    // for Core use:
    LoadingBarModule,
    AdminModule,
    // AgentModuleModule,
    NgxSpinnerModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    // LoginGuardService
 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
