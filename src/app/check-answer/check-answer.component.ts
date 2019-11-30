import { Component } from '@angular/core';
import {MultiplicationQuizService} from '../multiplication-quiz.service';

@Component({
  selector: 'app-check-answer',
  templateUrl: './check-answer.component.html',
  styleUrls: []
})
export class CheckAnswerComponent {
  public grade: string;
  constructor(quiz: MultiplicationQuizService) {
    this.grade = quiz.grade();
  }
}
