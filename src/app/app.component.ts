import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { COURSES } from './Data/db-data';
import { ICourse } from './Data/ICourse';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'full-demo';
  serverElements:any =[{type:'server',name:'test server',content:'this is test data server'}];

  // @ViewChild(CourseCardComponent) card : CourseCardComponent;
  @ViewChild('cardRef1',{read:ElementRef}) card : ElementRef;
  @ViewChild('container') container : ElementRef;

  @ViewChildren(CourseCardComponent,{read:ElementRef}) cards :QueryList<ElementRef>;
 
  courses=COURSES;
  coreCourse=COURSES[0];
  rxJsCourse =COURSES[1];
  ngRxCourse = COURSES[2];

  constructor()
  {
    
  }
  ngAfterViewInit(): void {
    console.log("cards is ",this.cards);

  }

  onAddServer(serverData:{serverName:string,serverContent:string})
  {
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
  }

  onAddBlueprint(blueprintData:{serverName:string,serverContent:string})
  {
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    })
  }

  onCardClick(course:ICourse)
  {
    console.log("conatiner is",this.container)
    console.log("card is ",this.card)
    console.log("Card clciked");
    console.log(course.description)
  }

  onToggle(isHighlighted:boolean)
  {
   console.log(isHighlighted)
  }

}
