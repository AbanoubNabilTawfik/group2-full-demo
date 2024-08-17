import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ICourse } from '../Data/ICourse';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
   @Input({required:true}) course:ICourse;
   @Output() courseSelected = new EventEmitter<ICourse>();

   onCourseViewed()
   {
    console.log("Card view course button clicked");
    this.courseSelected.emit(this.course);
   }
}
