import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses = [
    {
      id: 101,
      name: 'JavaScript for beginners',
      author: 'John Heikela',
      duration: 48,
      type: 'Free',
      price: 0.00,
      ratings: 3.5,
      image: '/assets/javascript.png',
      description: 'In this course you will learn the fundamentals of JavaScript, this course is designed for complete beginners'
    },
    {
      id: 102,
      name: 'Angular for beginners',
      author: 'Mark Vought',
      duration: 28,
      type: 'Premium',
      price: 1290.00,
      ratings: 4.5,
      image: 'assets/angular.png',
      description: 'In this course you will learn the fundamentals of Angular, this course is designed for complete beginners'

    },
    {
      id: 103,
      name: 'React for beginners',
      author: 'Steve Smith',
      duration: 18.5,
      type: 'Free',
      price: 0.00,
      ratings: 4.0,
      image: 'assets/react.png',
      description: 'In this course you will learn the fundamentals of React, this course is designed for complete beginners'

    },
    {
      id: 104,
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Premium',
      price: 1450.00,
      ratings: 4.8,
      image: 'assets/angular.png',
      description: 'In this course you will learn all the concepts of Angular, this course is designed for developers with a good understanding of the fundamentals'

    },
    {
      id: 105,
      name: 'Advance JavaScript Course',
      author: 'John Heikela',
      duration: 60,
      type: 'Premium',
      price: 1500.00,
      ratings: 4.5,
      image: 'assets/javascript.png',
      description: 'In this course you will learn all the concepts of Javascript, this course is designed for developers with a good understanding of the fundamentals'

    },
    {
      id: 106,
      name: 'Angular with .NET Core',
      author: 'John Heikela',
      duration: 60,
      type: 'Premium',
      price: 1500.00,
      ratings: 4.5,
      image: 'assets/javascript.png',
      description: 'In this course you will the fundamentals of Angular framework with .NET, this course is designed for developers with a good understanding of the fundamentals'

    },
    {
      id: 107,
      name: 'Advance React Course',
      author: 'Marry Smith',
      duration: 18.5,
      type: 'Free',
      price: 0.00,
      ratings: 4.0,
      image: 'assets/react.png',
      description: 'In this course you will learn all the concepts of React, this course is designed for developers with a good understanding of the fundamentals'

    },
    {
      id: 108,
      name: 'UX Design Course',
      author: 'Steve Smith',
      duration: 19.0,
      type: 'Premium',
      price: 1150.50,
      ratings: 4.8,
      image: 'assets/ui.png',
      description: 'In this course you will learn all about reactive web development'

    },
    {
      id: 109,
      name: 'Advance UX Design Course',
      author: 'Steve Smith',
      duration: 20.0,
      type: 'Premium',
      price: 1150.50,
      ratings: 4.8,
      image: 'assets/ui.png',
      description: 'In this course you will dive deeper into reactive web development'

    },
  ]

  getTotalCourses() {
    return this.courses.length;
  }

  getTotalFreeCourses() {
    return this.courses.filter(course => course.type === 'Free').length;
  }

  getTotalPremiumCourses() {
    return this.courses.filter(course => course.type === 'Premium').length
  }

  courseRadioBtnValue: string = "All"; //keep track of which radio btn is selected

  onFilterRadioBtnChange(data: string) {
    this.courseRadioBtnValue = data;
    // console.log(this.courseRadioBtnValue)
  }

}
