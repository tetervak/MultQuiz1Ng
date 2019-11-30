import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MultiplicationProblem} from '../multiplication.problem';
import {MultiplicationQuizService} from '../multiplication-quiz.service';
import {log} from 'util';

@Component({
  selector: 'app-try-again',
  templateUrl: './try-again.component.html',
  styleUrls: ['./try-again.component.css', '../../assets/css/main.css']
})
export class TryAgainComponent {
  public quiz: MultiplicationQuizService;
  public problem: MultiplicationProblem;
  private router: Router;
  constructor(quiz: MultiplicationQuizService, router: Router) {
    this.quiz = quiz;
    this.problem = quiz.problem;
    this.router = router;
  }
  public check(userAnswer: string) {
    this.quiz.userAnswer = userAnswer;
    log('userAnswer=[' + userAnswer + ']');
    this.router.navigate(['/', 'check_answer'])
      .then(() => log('checking the answer'));
  }
}
