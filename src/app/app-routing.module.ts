import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPage } from './page/contact/contact.page';
import { HomePage } from './page/home/home.page';
import { MyProjectPage } from './page/my-project/my-project.page';
import { MyStudyPage } from './page/my-study/my-study.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'my-project',
    component: MyProjectPage,
  },
  {
    path: 'my-study',
    component: MyStudyPage,
  },

  {
    path: 'contact',
    component: ContactPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
