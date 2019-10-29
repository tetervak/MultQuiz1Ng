import { Component } from '@angular/core';
import {AppMultiplicationQuizService} from './app.multiplication-quiz.service';
import {AppMultiplicationProblem} from './app.multiplication-problem';

@Component({
  selector: 'app-right-answer',
  templateUrl: './app.right-answer.component.html',
  styleUrls: ['./app.component.css', './app.right-answer.component.css']
})
export class AppRightAnswerComponent {
  public problem: AppMultiplicationProblem;
  public userAnswer: string;
  constructor(quiz: AppMultiplicationQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}
