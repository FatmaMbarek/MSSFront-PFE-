import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './views/shared/auth.guard';
import { SignInComponent } from './views/auth/sign-in/sign-in.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },


  { path: 'auth/sign-in', component: SignInComponent }, // Login route
  { 
    path: '', 
    loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule),
    canActivate: [AuthGuard]  // Protect this route
  },
  { 
    path: '', 
    loadChildren: () => import('./layouts/simple/simple.module').then(m => m.SimpleModule),
    canActivate: [AuthGuard]  // Protect this route
  },
  { 
    path: '', 
    loadChildren: () => import('./layouts/menu-style/horizontal/horizontal.module').then(m => m.HorizontalModule),
    canActivate: [AuthGuard]  // Protect this route
  },
  { 
    path: '', 
    loadChildren: () => import('./layouts/menu-style/dual-compact/dual-compact.module').then(m => m.DualCompactModule),
    canActivate: [AuthGuard]  // Protect this route
  },
  { 
    path: '', 
    loadChildren: () => import('./layouts/menu-style/boxed-horizontal/boxed-horizontal.module').then(m => m.BoxedHorizontalModule),
    canActivate: [AuthGuard]  // Protect this route
  },

 



   // Add a wildcard route for unmatched paths
   { path: '**', redirectTo: '/auth/sign-in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
