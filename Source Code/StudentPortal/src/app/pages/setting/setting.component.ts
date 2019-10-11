import { Component, OnInit } from '@angular/core';
import {FauthService} from '../../auth/fauth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {auth} from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  public currentStudent;
  StudentFirstName = '';
  StudentLastName = '';
  SecondEmailAddress = '';
  StudentAddressOne = '';
  StudentAddressTwo = '';
  StudentCity = '';
  StudentState = '';
  StudentZipCode = '';
  fileToUpload;
  fileToDisplay;

  constructor(private Fauth: FauthService, private StudentfAuth: AngularFireAuth,
              private Studentdb: AngularFireDatabase, private StudentRouter: Router) { }

  ngOnInit() {
    // this function is for getting the student information from firebase and show it on the page
    this.StudentfAuth.authState.subscribe(
      (auth) => {
        // this.email = auth.email;
        if (auth != null) {
          // profile is the collection in firebase
          this.Studentdb.object('Profile/' + auth.uid).valueChanges().subscribe(
            data => {
              // Storing the data in the currentStudent variable
              this.currentStudent = data;
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
      });
  }


  UpdateStudentP() {
    // this if statement is for error handling
    if (!this.StudentFirstName || !this.StudentLastName
      || !this.SecondEmailAddress || !this.StudentAddressOne
      || !this.StudentAddressTwo || !this.StudentCity ||
      !this.StudentState  ||
      !this.StudentZipCode
    ) {
      alert('Please Enter a valid information.');
    } else {
      // This is for getting the information from the page and update it to firebase
      this.StudentfAuth.authState.subscribe(
        (authentication) => {
          // profile is the collection in firebase, and update is the function used for updating the information
          this.Studentdb.object('Profile/' + authentication.uid).update({
            StudentFirstName: this.StudentFirstName,
            StudentLastName: this.StudentLastName,
            SecondEmailAddress: this.SecondEmailAddress,
            StudentAddressOne: this.StudentAddressOne,
            StudentAddressTwo: this.StudentAddressTwo,
            StudentCity: this.StudentCity,
            StudentState: this.StudentState,
            StudentZipCode: this.StudentZipCode
          });
        });
      alert('Updating Successful.');
      this.StudentRouter.navigate(['portal']);
    }
  }

}
