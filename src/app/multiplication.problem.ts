export class MultiplicationProblem {
  public a: number;
  public b: number;
  public answer: number;
  constructor() {
    this.reset();
  }
  public reset() {
    this.a = 1 + Math.floor(9 * Math.random());
    this.b = 1 + Math.floor(9 * Math.random());
    this.answer = this.a * this.b;
  }
}
