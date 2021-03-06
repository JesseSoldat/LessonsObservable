import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursesService {
  constructor(private db: AngularFireDatabase) {}

  findAllCourses(): Observable<Course[]> {
    return this.db.list('courses')
      .first()
      .do(console.log);
  }

  findLatestLesson(): Observable<Lesson[]> {
    return this.db.list('lessons', {
      query: {
        orderByKey: true,
        limitToLast: 10
      }
    })
    .first()
    .do(console.log);
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
    .first()
    .map(data => data[0]);
  }

  findLessonsForCourse(courseId: string): Observable<Lesson[]> {
    return this.db.list('lessons', {
      query: {
        orderByChild: 'courseId',
        equalTo: courseId
      }
    })
    .first();
  }

}
