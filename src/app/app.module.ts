import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {RightAnswerComponent} from './right-answer/right-answer.component';
import {MultiplicationQuizService} from './multiplication-quiz.service';
import {WrongAnswerComponent} from './wrong-answer/wrong-answer.component';
import {InputErrorComponent} from './input-error/input-error.component';
import {NewProblemComponent} from './new-problem/new-problem.component';
import {SeeAnswerComponent} from './see-answer/see-answer.component';
import {CheckAnswerComponent} from './check-answer/check-answer.component';
import {TryAgainComponent} from './try-again/try-again.component';
import {FooterModule} from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    NewProblemComponent,
    SeeAnswerComponent,
    CheckAnswerComponent,
    RightAnswerComponent,
    WrongAnswerComponent,
    TryAgainComponent,
    InputErrorComponent
  ],
  imports: [
    FooterModule,
    BrowserModule,
    routing
  ],
  providers: [MultiplicationQuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
