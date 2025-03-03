import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'welcome', loadComponent: () => import('./pages/welcome/welcome.page').then(m => m.WelcomePage) },
  { path: 'phone-number', loadComponent: () => import('./pages/phone-number/phone-number.page').then(m => m.PhoneNumberPage) },
  { path: 'EditProfile', loadComponent: () => import('./pages/edit-profile/edit-profile.page').then(m => m.EditProfilePage) },
  { path: '', loadComponent: () => import('./pages/verify-code/verify-code.page').then(m => m.VerifyCodePage) }
];
