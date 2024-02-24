import { Injector } from "@angular/core";
import { LayoutService } from "../app/shared/services/layout.service";
console.log("Simple Injector Example");
// src/app/shared/services/layout.service
var injector = Injector.create([
  { provide: LayoutService, deps: [] },
]);

var inject =injector.get(LayoutService)

var lang =inject.language

export const environment = {
  
  production: true,
  Server_URL:`https://localhost:44346/api`,
  UpdateImageUrl:`https://localhost:44346/`
};
 