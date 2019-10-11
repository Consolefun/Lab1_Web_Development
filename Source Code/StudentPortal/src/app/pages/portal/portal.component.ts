import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {ApiService} from '../../auth/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  currentStudent;
  StudentFirstName = '';
  StudentLastName = '';
  SecondEmailAddress = '';
  StudentAddressOne = '';
  StudentAddressTwo = '';
  StudentCity = '';
  StudentState = '';
  StudentZipCode = '';
  CourcesData = [];
  // CourcesData;


  constructor(private Studentdb: AngularFireDatabase, private route: ActivatedRoute,
              private MongoApi: ApiService, private StudentfAuth: AngularFireAuth) { }

  ngOnInit() {
    // This will fetch the data using uid from firebase and store it on the variable currentStudent
    this.StudentfAuth.authState.subscribe(
      (auth) => {
        // this.email = auth.email;
        if (auth != null) {
          this.Studentdb.object('Profile/' + auth.uid).valueChanges().subscribe(
            Profiledata => {
              this.currentStudent = Profiledata;
              // console.log(this.currentStudent);
              this.StudentFirstName = this.currentStudent.StudentFirstName;
              this.StudentLastName = this.currentStudent.StudentLastName;
              this.SecondEmailAddress = this.currentStudent.SecondEmailAddress;
              this.StudentAddressOne = this.currentStudent.StudentAddressOne;
              this.StudentAddressTwo = this.currentStudent.StudentAddressTwo;
              this.StudentCity = this.currentStudent.StudentCity;
              this.StudentState = this.currentStudent.StudentState;
              this.StudentZipCode = this.currentStudent.StudentZipCode;
            });
        }
        this.Studentdb.object('Cources/' + auth.uid).valueChanges().subscribe(
          data => {
            // console.log(data);
            this.getCourcesDetails(data);
            // this.CourcesIDs.push(this.currentStudent.IDs);
          });
      });
    // console.log(this.CourcesData);

 }

  getCourcesDetails(id) {
    // console.log(id.Cources[1]);
    this.CourcesData = id.Cources;


    for (let i = 0; i < id.length; i++) {
         this.CourcesData[i] = {
        _id: id.Cources[i]._id,
        name: id.Cources[i].name,
        description: id.Cources[i].description
      };
    }

  }

}
