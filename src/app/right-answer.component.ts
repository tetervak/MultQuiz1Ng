import { Component } from '@angular/core';
import {MultiplicationQuizService} from './multiplication-quiz.service';
import {MultiplicationProblem} from './multiplication.problem';

@Component({
  selector: 'app-right-answer',
  templateUrl: './right-answer.component.html',
  styleUrls: ['./right-answer.component.css', '../assets/css/main.css']
})
export class RightAnswerComponent {
  public problem: MultiplicationProblem;
  public userAnswer: string;
  constructor(quiz: MultiplicationQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}
