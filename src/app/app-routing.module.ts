import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AnotherPage } from './another/another.page';
import { ThirdPage } from './third-page/third-page.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'another-page',
    component: AnotherPage,
    canActivate:[AuthenticationService]
  },
  {
    path: 'third-page',
    component: ThirdPage,
    canActivate:[AuthenticationService]   
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
