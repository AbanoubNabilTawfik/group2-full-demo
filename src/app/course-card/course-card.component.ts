import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, output, QueryList, ViewChild } from '@angular/core';
import { ICourse } from '../Data/ICourse';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements AfterViewInit ,AfterContentInit{
 

   @Input({required:true}) course:ICourse;
   @Output() courseSelected = new EventEmitter<ICourse>();

     //@ContentChild(CourseImageComponent) image:CourseImageComponent;
      @ContentChildren(CourseImageComponent,{read:ElementRef}) images:QueryList<ElementRef>;


   ngAfterViewInit(): void {
    //console.log("course image from parent is ",this.images)
  }

  ngAfterContentInit(): void {
    console.log("course image from parent is ",this.images)
  }
   onCourseViewed()
   {
    console.log("Card view course button clicked");
    this.courseSelected.emit(this.course);
   }
}
