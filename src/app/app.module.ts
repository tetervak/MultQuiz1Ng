import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer.component';
import {RightAnswerComponent} from './right-answer.component';
import {MultiplicationQuizService} from './multiplication-quiz.service';
import {WrongAnswerComponent} from './wrong-answer.component';
import {InputErrorComponent} from './input-error.component';
import {NewProblemComponent} from './new-problem.component';
import {SeeAnswerComponent} from './see-answer.component';
import {CheckAnswerComponent} from './check-answer.component';
import {TryAgainComponent} from './try-again.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewProblemComponent,
    SeeAnswerComponent,
    CheckAnswerComponent,
    RightAnswerComponent,
    WrongAnswerComponent,
    TryAgainComponent,
    InputErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [MultiplicationQuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
