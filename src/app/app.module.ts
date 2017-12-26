import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NOTE ilker added for 2 way data binding between template and component
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; // NOTE ilker added to use routes
import { AppComponent } from './app.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherListDataService } from './services/teacher-list-data.service';
@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [TeacherListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
