import { Component } from '@angular/core';
import {AppMultiplicationQuizService} from './app.multiplication-quiz.service';
import {AppMultiplicationProblem} from './app.multiplication-problem';

@Component({
  selector: 'app-input-error',
  templateUrl: './app.input-error.component.html',
  styleUrls: ['./app.component.css', './app.input-error.component.css']
})
export class AppInputErrorComponent {
  public problem: AppMultiplicationProblem;
  public userAnswer: string;
  constructor(quiz: AppMultiplicationQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}
