import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from "../shared/model/course";
import { Lesson } from "../shared/model/lesson";
import * as _ from 'lodash';
import { CoursesService } from "../services/courses.service";
import { UserService } from "../services/user.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute, 
    private courseService: CoursesService,
    private userService: UserService) { }

  ngOnInit() {
    this.course$ = this.route.params
      .switchMap(params => this.courseService.findCourseByUrl(params['id']))
      .first()
      .publishLast().refCount();

    this.lessons$ = this.course$.switchMap(course => this.courseService.findLessonsForCourse(course.id))
    .first()
    .publishLast().refCount();
 
  }

  

}
