import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import { PortalComponent } from './pages/portal/portal.component';
import { SettingComponent } from './pages/setting/setting.component';
import { CourseComponent } from './pages/course/course.component';
import {HttpClientModule} from '@angular/common/http';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DlDateTimeDateModule, DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import { BooksComponent } from './pages/books/books.component';
import { AllDesignComponent } from './pages/all-design/all-design.component';
import { ArchitectureDesignComponent } from './pages/architecture-design/architecture-design.component';
import { FashionDesignComponent } from './pages/fashion-design/fashion-design.component';
import { GameDesignComponent } from './pages/game-design/game-design.component';
import { GraphicDesignComponent } from './pages/graphic-design/graphic-design.component';
import { InteriorDesignComponent } from './pages/interior-design/interior-design.component';
import { WebDesignComponent } from './pages/web-design/web-design.component';

const firebase = {
    apiKey: 'AIzaSyD28kitXFB0ybVo-ZiSX2nSn4fGX1Pv7Sg',
    authDomain: 'studentportal-c1027.firebaseapp.com',
    databaseURL: 'https://studentportal-c1027.firebaseio.com',
    projectId: 'studentportal-c1027',
    storageBucket: '',
    messagingSenderId: '86313023526',
    appId: '1:86313023526:web:5a3075ee60365a7c2a0ee7',
    measurementId: 'G-BTJ2XGY5ZR'
  };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterBarComponent,
    SideBarComponent,
    NavBarComponent,
    PortalComponent,
    SettingComponent,
    CourseComponent,
    CalendarComponent,
    BooksComponent,
    AllDesignComponent,
    ArchitectureDesignComponent,
    FashionDesignComponent,
    GameDesignComponent,
    GraphicDesignComponent,
    InteriorDesignComponent,
    WebDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DlDateTimePickerModule,
    DlDateTimeDateModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
