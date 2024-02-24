import { Routes } from '@angular/router';


export const content: Routes = [
  
  {
    path: 'admin',
    loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)
  }
];
