import { Component } from '@angular/core';
import {AppMultiplicationQuizService} from './app.multiplication-quiz.service';
import {AppMultiplicationProblem} from './app.multiplication-problem';

@Component({
  selector: 'app-wrong-answer',
  templateUrl: './app.wrong-answer.component.html',
  styleUrls: ['./app.component.css', './app.wrong-answer.component.css']
})
export class AppWrongAnswerComponent {
  public problem: AppMultiplicationProblem;
  public userAnswer: string;
  constructor(quiz: AppMultiplicationQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}
