import {Routes, RouterModule} from '@angular/router';
import {NewProblemComponent} from './new-problem.component';
import {SeeAnswerComponent} from './see-answer.component';
import {CheckAnswerComponent} from './check-answer.component';
import {TryAgainComponent} from './try-again.component';

const appRouts: Routes = [
  {path: 'new_problem', component: NewProblemComponent},
  {path: 'see_answer', component: SeeAnswerComponent},
  {path: 'check_answer', component: CheckAnswerComponent},
  {path: 'try_again', component: TryAgainComponent},
  {path: '', redirectTo: 'new_problem', pathMatch: 'full'},
  {path: '**', redirectTo: 'new_problem'}
];

export const routing = RouterModule.forRoot(appRouts);


