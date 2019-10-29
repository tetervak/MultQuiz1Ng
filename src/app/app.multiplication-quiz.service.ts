import {AppMultiplicationProblem} from './app.multiplication-problem';
import {Injectable} from '@angular/core';
@Injectable()
export class AppMultiplicationQuizService {
  public problem: AppMultiplicationProblem;
  public userAnswer: string;
  constructor() {
    this.problem = new AppMultiplicationProblem();
    this.userAnswer = '';
  }
  public reset() {
    this.problem.reset()
    this.userAnswer = '';
  }
}
