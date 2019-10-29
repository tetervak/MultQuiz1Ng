import { Component } from '@angular/core';
import {AppMultiplicationProblem} from './app.multiplication-problem';
import {AppMultiplicationQuizService} from './app.multiplication-quiz.service';

@Component({
  selector: 'app-input-answer',
  templateUrl: './app.input-answer.component.html',
  styleUrls: ['./app.component.css', './app.input-answer.component.css']
})
export class AppInputAnswerComponent {
  public quiz: AppMultiplicationQuizService;
  public problem: AppMultiplicationProblem;
  constructor(quiz: AppMultiplicationQuizService) {
    this.quiz = quiz;
    this.problem = quiz.problem;
  }
}
