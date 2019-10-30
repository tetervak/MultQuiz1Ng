import {MultiplicationProblem} from './multiplication.problem';
import {Injectable} from '@angular/core';
@Injectable()
export class MultiplicationQuizService {
  public problem: MultiplicationProblem;
  public userAnswer: string;
  constructor() {
    this.problem = new MultiplicationProblem();
    this.userAnswer = '';
  }
  public reset() {
    this.problem.reset();
    this.userAnswer = '';
  }
  public grade(): string {
    if (this.userAnswer === '') {
      this.userAnswer = 'empty';
      return 'inputError';
    }
    const parsed = parseFloat(this.userAnswer);
    if (isNaN(parsed)) {
      return 'inputError';
    } else {
      if (parsed === this.problem.answer) {
        return 'rightAnswer';
      } else {
        return 'wrongAnswer';
      }
    }
  }
}
