import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { CoreComponent } from './core/core.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ServerComponent,
    CoreComponent,
    ServerElementComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
