import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../auth/api.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  FCources = [];
  CourcesIDs = [];
  constructor(private route: ActivatedRoute,   private Studentdb: AngularFireDatabase,
              private MongoApi: ApiService, private StudentfAuth: AngularFireAuth) { }

  ngOnInit() {
    this.MongoApi.getCoursesPortalData()
      .subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          this.CourcesIDs[i] = {
            _id: res[i]._id,
            name: res[i].name,
            description: res[i].description
          };
        }
        // console.log(this.CourcesIDs);
      }, err => {
        console.log(err);
      });
  }

  adding(i) {
    this.FCources.push(i);
    // console.log(this.FCources);
    // console.log(this.FCources[0]._id);
    this.StudentfAuth.authState.subscribe(
      (authentication) => {
        // profile is the collection in firebase, and update is the function used for updating the information
        this.Studentdb.object(`Cources/${authentication.uid}`).set({
          Cources: this.FCources,
        });
      });
    alert('Adding the Course Successful.');

  }
}
