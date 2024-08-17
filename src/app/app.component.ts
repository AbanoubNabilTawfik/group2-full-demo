import { Component } from '@angular/core';
import { COURSES } from './Data/db-data';
import { ICourse } from './Data/ICourse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'full-demo';
  serverElements:any =[{type:'server',name:'test server',content:'this is test data server'}];
 
  courses=COURSES;
  coreCourse=COURSES[0];
  rxJsCourse =COURSES[1];
  ngRxCourse = COURSES[2];

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
    console.log("Card clciked");
    console.log(course.description)
  }

}
