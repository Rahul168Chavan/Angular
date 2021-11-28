import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>{{title}}<h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project';

  // readMe() {
  //   console.log("button Clicked");
  // }

  // subTitle = "Its fun to learn the interpolation";

  // colorVal = 'red';

  // placeholderVal = "Enter Value";
  // hrefVal = "http://google.com";

  // showAlert() {
  //   alert("Greeting from Angular tutor");
  // }

  // firstname ="";

  // user ={
  //   userId : 20,
  //   firstName : 'Rahul',
  //   lastName : 'Chavan',
  //   DOB : '10/11/2021',
  //   salary : 5000
  // };


  user ={
    firstName : 'Rahul',
    city : 'Hyderabad',
    CityCode : 'HYD'
  }
}