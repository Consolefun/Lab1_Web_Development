import { Component, OnInit } from '@angular/core';
import {FauthService} from '../../auth/fauth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public currentStudent;
  StudentFirstName = '';
  StudentLastName = '';
  constructor(private Fauth: FauthService, private StudentfAuth: AngularFireAuth,
              private Studentdb: AngularFireDatabase) { }

  ngOnInit() {
    this.StudentfAuth.authState.subscribe(
      (auth) => {
        // this.email = auth.email;
        if (auth != null) {
          this.Studentdb.object('Profile/' + auth.uid).valueChanges().subscribe(
            data => {
              this.currentStudent = data;
              this.StudentFirstName = this.currentStudent.StudentFirstName;
              this.StudentLastName = this.currentStudent.StudentLastName;
            });
        }
      });
  }

}
