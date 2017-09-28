import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from "../shared/model/course";
import { Lesson } from "../shared/model/lesson";
import * as _ from 'lodash';
import { CoursesService } from "../services/courses.service";


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  lessons: Lesson[];

  constructor(private route: ActivatedRoute, 
    private courseService: CoursesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const courseUrl = params['id'];
      
      this.courseService.findCourseByUrl(courseUrl)
      .subscribe(data => {
        this.course = data;

       this.courseService.findLessonsForCourse(this.course.id)
        .subscribe(lessons => this.lessons = lessons);
      });
    });
  }

  onSubscribe(email: string) {
    console.log(email);
    
  }

}
