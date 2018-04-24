import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
  CoursesList:String[];
  institution:String;


  constructor(public navCtrl: NavController, public navParams: NavParams, private api_service:ApiProvider) {
      // when the page loads, load data
      this.initializeCourses();
      // get insitution from other page
      this.institution = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

  // this grabs the data from the API
  // on th einstitution page, I grabbed the UUID of the school
  // now I am using the institution detail endpoint which will give me
  // all course objects from that school
  initializeCourses(){
    this.api_service.getGetObject("/courses/api/institution/detail/" + this.navParams.get('data'),{})
    .subscribe(courses =>{this.CoursesList = courses
    });
  }

}