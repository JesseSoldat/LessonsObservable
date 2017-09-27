import { Component, OnInit } from '@angular/core';
import { Lesson } from "../shared/model/lesson";
import { store } from "./app-data";
import { testLessons } from "../shared/model/test-lessons";

@Component({
  selector: 'app-event-bus',
  templateUrl: './event-bus.component.html',
  styleUrls: ['./event-bus.component.css']
})
export class EventBusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    store.initializeLessonsList(<any>testLessons.slice(0));

    setTimeout(() => {
      const newLesson:any = {
        id: Math.random(),
        description: 'New lesson from the backend'
      };

      store.addLesson(newLesson);
    }, 6000)
  }

  addLesson(lessonText: string) {
    const newLesson:any = {
      id: Math.random(),
      description: lessonText
    };
    store.addLesson(newLesson);
  }

}
