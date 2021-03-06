import { Component, OnInit } from '@angular/core';
import {TeacherListDataService} from '../../services/teacher-list-data.service'
import {Teacher} from '../../services/teacher-list-data.service'

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor(private teacherListDataService:TeacherListDataService) { }
  teachers:Teacher[];
  isToDisplayTeachers: boolean = false;
  
  
  ngOnInit() {
    this.teacherListDataService.getTeachers().subscribe( (teachers) => {
      console.log(teachers);
      this.teachers = teachers;
    });
  }
  toggleToDisplayTeachers() {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  };
}
