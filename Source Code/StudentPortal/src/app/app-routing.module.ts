import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PortalComponent} from './pages/portal/portal.component';
import {AuthGuard} from './auth/auth.guard';
import {SettingComponent} from './pages/setting/setting.component';
import {CourseComponent} from './pages/course/course.component';
import {CalendarComponent} from './pages/calendar/calendar.component';
import {BooksComponent} from './pages/books/books.component';
import {AllDesignComponent} from "./pages/all-design/all-design.component";
import {WebDesignComponent} from "./pages/web-design/web-design.component";
import {InteriorDesignComponent} from "./pages/interior-design/interior-design.component";
import {GraphicDesignComponent} from "./pages/graphic-design/graphic-design.component";
import {GameDesignComponent} from "./pages/game-design/game-design.component";
import {FashionDesignComponent} from "./pages/fashion-design/fashion-design.component";
import {ArchitectureDesignComponent} from './pages/architecture-design/architecture-design.component';


const WebRoutes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'portal', component: PortalComponent},
  { path: 'setting', component: SettingComponent},
  { path: 'course', component: CourseComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'books', component: BooksComponent},
  { path: 'all', component: AllDesignComponent},
  { path: 'architecture', component: ArchitectureDesignComponent},
  { path: 'fashion', component: FashionDesignComponent},
  { path: 'game', component: GameDesignComponent},
  { path: 'graphic', component: GraphicDesignComponent},
  { path: 'interior', component: InteriorDesignComponent},
  { path: 'web', component: WebDesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(WebRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
