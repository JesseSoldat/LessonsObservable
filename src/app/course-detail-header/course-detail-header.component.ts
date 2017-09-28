import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Course } from "../shared/model/course";
import { Lesson } from "../shared/model/lesson";

@Component({
  selector: 'course-detail-header',
  templateUrl: './course-detail-header.component.html',
  styleUrls: ['./course-detail-header.component.css']
})
export class CourseDetailHeaderComponent implements OnInit {
  @Input() course: Course;
  @Input() lessons: Lesson[];
  @Input() firstName: string;
  @Output() subscribe = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubscribe(email: string) {
    this.subscribe.emit(email);
  }

}
