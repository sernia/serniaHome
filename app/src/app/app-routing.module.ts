import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoComponent } from './memo/memo.component';
import { StudyComponent } from './study/study.component'
import { IndexComponent } from './index/index.component' 


const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'memo', component: MemoComponent},
  {path: 'study', component: StudyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
