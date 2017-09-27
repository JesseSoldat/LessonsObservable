import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';
import { Observer } from 'rxjs/Observer';
import { store } from '../event-bus/app-data';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer<Lesson[]>, OnInit{
  lessons: Lesson[] = [];

  constructor() { }

  ngOnInit() {
   store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('lesson list recieved data', data);
    this.lessons = data;
  }

  error(err: any) {
    console.log(err); 
  }

  complete() {
    console.log('completed');  
  }

  toggleLessonView(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.deleteLesson(deleted);
  }

}
