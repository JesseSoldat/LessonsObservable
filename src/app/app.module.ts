import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';
import { CoursesService } from "./services/courses.service";
import { NewsletterService } from "./services/newsletter.service"; 
import { UserService } from "./services/user.service";
import { CoursesHttpService } from './services/courses-http.service';
import { MessagesService } from "./services/messages.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { EventBusComponent } from './event-bus/event-bus.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LoginComponent } from './login/login.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CourseDetailHeaderComponent } from './course-detail-header/course-detail-header.component';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { CourseComponent } from './course/course.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { SafeUrlPipe } from "./shared/pipes/safe-url.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LessonsListComponent,
    LessonsCounterComponent,
    HomeComponent,
    CourseDetailComponent,
    EventBusComponent,
    CoursesListComponent,
    LoginComponent,
    NewsletterComponent,
    TopMenuComponent,
    CourseDetailHeaderComponent,
    AllLessonsComponent,
    CourseComponent,
    LessonDetailComponent,
    MessagesComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    CoursesService, 
    NewsletterService,
    UserService,
    CoursesHttpService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
