import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyCustomPageWithIdPage } from './my-custom-page/my-custom-page-with-id/my-custom-page-with-id';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'my-custom-page/my-custom-page-with-id/:id',
    component: MyCustomPageWithIdPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-custom-page',
    loadChildren: () => import('./my-custom-page/my-custom-page.module').then( m => m.MyCustomPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
