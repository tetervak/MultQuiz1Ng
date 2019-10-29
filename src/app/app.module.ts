import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppInputAnswerComponent} from './app.input-answer.component';
import {AppFooterComponent} from './app.footer.component';
import {AppRightAnswerComponent} from './app.right-answer.component';
import {AppMultiplicationQuizService} from './app.multiplication-quiz.service';
import {AppWrongAnswerComponent} from './app.wrong-answer.component';
import {AppInputErrorComponent} from './app.input-error.component';

@NgModule({
  declarations: [
    AppComponent, AppFooterComponent,
    AppInputAnswerComponent, AppRightAnswerComponent, AppWrongAnswerComponent, AppInputErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppMultiplicationQuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
