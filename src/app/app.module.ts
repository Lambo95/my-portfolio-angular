import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePage } from './page/home/home.page';
import { ContactPage } from './page/contact/contact.page';
import { MyStudyPage } from './page/my-study/my-study.page';
import { MyProjectPage } from './page/my-project/my-project.page';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ContactPage,
    MyStudyPage,
    MyProjectPage,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbCollapseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
