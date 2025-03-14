import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/welcome/welcome.page').then(m => m.WelcomePage) },
  { path: 'phone-number', loadComponent: () => import('./pages/phone-number/phone-number.page').then(m => m.PhoneNumberPage) },
  { path: 'edit-profile', loadComponent: () => import('./pages/edit-profile/edit-profile.page').then(m => m.EditProfilePage) },
  { path: 'verify-code', loadComponent: () => import('./pages/verify-code/verify-code.page').then(m => m.VerifyCodePage) },
  {
    path: 'group-chats',
    loadComponent: () => import('./pages/group-chats/group-chats.page').then( m => m.GroupChatsPage)
  }
];
